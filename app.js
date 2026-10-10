/**
 * Passenger / cPanel startup file for the Invisalign Center Hyderabad site.
 *
 * On GoDaddy cPanel: "Setup Node.js App" -> Application startup file: app.js
 * The app listens on the port Passenger provides in process.env.PORT.
 * Do NOT rename this file unless you also update the startup file setting.
 */
const { createServer } = require('http');
const next = require('next');

const port = parseInt(process.env.PORT || '3000', 10);
const app = next({ dev: false, dir: __dirname });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((req, res) => handle(req, res)).listen(port, () => {
      console.log('Invisalign Center Hyderabad is running on port ' + port);
    });
  })
  .catch((err) => {
    console.error('Failed to start Next.js server:', err);
    process.exit(1);
  });
