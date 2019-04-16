const next = require('next');
const express = require('express');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_DEV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Nice permalinks for pages.
  // Sets up a custom route, that then uses next.js to render the about page.
  server.get('/robot/:id', (req, res) => {
    const params = { id: req.params.id };
    return app.render(req, res, '/robot', params);
  });

  // For all other routes, use next.js.
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`${'\u2705'}  Ready on http://localhost:${port}`);
  });
});
