<?php
/**
 * Lead handler for the Invisalign Center Hyderabad site.
 * Works on any cPanel host (GoDaddy included) with PHP + mail() enabled.
 *
 * 1. Change $NOTIFY_TO below to the clinic inbox that should receive leads.
 * 2. Leads are also appended to leads.csv in this same folder (as a backup),
 *    and optionally emailed as a plain-text summary.
 * 3. Optional: add a Zapier / CRM webhook URL in $WEBHOOK_URL to push leads.
 */

$NOTIFY_TO   = 'info@invisalignhyderabadcenter.com'; // <-- CONFIRM THIS INBOX
$NOTIFY_FROM = 'no-reply@invisalignhyderabadcenter.com';
$WEBHOOK_URL = ''; // optional: https://hooks.zapier.com/...
$ALLOWED_HOSTS = ['invisalignhyderabadcenter.com', 'www.invisalignhyderabadcenter.com', 'localhost'];

header('Content-Type: application/json; charset=utf-8');

function fail($code, $msg) {
  http_response_code($code);
  echo json_encode(['ok' => false, 'error' => $msg]);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  fail(405, 'Method not allowed');
}

// --- Basic origin check (defence in depth; not a security boundary) --------
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '') {
  $host = parse_url($origin, PHP_URL_HOST);
  if (!in_array($host, $ALLOWED_HOSTS, true) && !preg_match('/\.godaddysites\.com$/', (string)$host)) {
    fail(403, 'Forbidden origin');
  }
}

// --- Honeypot: bots fill this hidden field --------------------------------
if (!empty($_POST['company'])) {
  echo json_encode(['ok' => true, 'message' => 'Thank you.']);
  exit;
}

function clean($key, $max = 200) {
  $v = trim((string)($_POST[$key] ?? ''));
  $v = str_replace(["\r", "\n", "%0a", "%0d"], ' ', $v);
  $v = strip_tags($v);
  if (function_exists('mb_substr')) {
    return mb_substr($v, 0, $max);
  }
  return substr($v, 0, $max);
}

$name    = clean('name', 120);
$phone   = clean('phone', 20);
$email   = clean('email', 160);
$city    = clean('city', 80);
$concern = clean('concern', 120);
$message = trim(strip_tags((string)($_POST['message'] ?? '')));
$message = str_replace(["\r\n", "\n", "\r"], ' | ', $message);
$message = substr($message, 0, 1500);
$page    = clean('page', 200);
$source  = clean('source', 60); // e.g. "google-ads", "meta", utm_source

if ($name === '' || $phone === '') {
  fail(422, 'Name and phone number are required.');
}

// Indian mobile: 10 digits, optionally +91 / 0 prefixed
$digits = preg_replace('/\D/', '', $phone);
if (strlen($digits) === 12 && substr($digits, 0, 2) === '91') {
  $digits = substr($digits, 2);
}
if (strlen($digits) === 11 && $digits[0] === '0') {
  $digits = substr($digits, 1);
}
if (strlen($digits) !== 10) {
  fail(422, 'Please enter a valid 10-digit mobile number.');
}
$phone = '+91' . $digits;

if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  fail(422, 'Please enter a valid email address.');
}

$when = date('c');
$ip   = $_SERVER['REMOTE_ADDR'] ?? '';
$ua   = substr((string)($_SERVER['HTTP_USER_AGENT'] ?? ''), 0, 200);

// --- Backup CSV log --------------------------------------------------------
$row = [$when, $name, $phone, $email, $city, $concern, $message, $page, $source, $ip];
$fh = @fopen(__DIR__ . '/leads.csv', 'a');
if ($fh) {
  // Prevents the log being served as a plain file with .htaccess hardening
  @fwrite($fh, '"' . implode('","', array_map(fn($c) => str_replace('"', "'", (string)$c), $row)) . '"' . "\n");
  @fclose($fh);
}

// --- Email notification ----------------------------------------------------
$subject = 'New Invisalign enquiry: ' . $name . ' (' . $phone . ')';
$lines = [
  'New enquiry from invisalignhyderabadcenter.com',
  '',
  'Name:       ' . $name,
  'Mobile:     ' . $phone,
  'Email:      ' . ($email !== '' ? $email : '-'),
  'City:       ' . ($city !== '' ? $city : '-'),
  'Interested: ' . ($concern !== '' ? $concern : '-'),
  'Message:    ' . ($message !== '' ? $message : '-'),
  '',
  'Page:       ' . ($page !== '' ? $page : '-'),
  'Source:     ' . ($source !== '' ? $source : 'direct'),
  'Received:   ' . $when,
  'IP:         ' . $ip,
];
$body = implode("\n", $lines);
$headers = "From: Invisalign Center Hyderabad <{$NOTIFY_FROM}>\r\n" .
           "Reply-To: " . ($email !== '' ? $email : $NOTIFY_FROM) . "\r\n" .
           "Content-Type: text/plain; charset=UTF-8\r\n";

$mailed = @mail($NOTIFY_TO, $subject, $body, $headers);

// --- Optional CRM webhook --------------------------------------------------
if ($WEBHOOK_URL !== '') {
  $payload = json_encode(['name' => $name, 'phone' => $phone, 'email' => $email, 'city' => $city,
                          'concern' => $concern, 'message' => $message, 'page' => $page,
                          'source' => $source, 'received' => $when]);
  $ch = @curl_init($WEBHOOK_URL);
  if ($ch) {
    @curl_setopt_array($ch, [
      CURLOPT_POST => true,
      CURLOPT_POSTFIELDS => $payload,
      CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_TIMEOUT => 8,
    ]);
    @curl_exec($ch);
    @curl_close($ch);
  }
}

echo json_encode([
  'ok' => true,
  'mailed' => (bool)$mailed,
  'message' => 'Thank you. Our Invisalign team will call you shortly.',
]);
