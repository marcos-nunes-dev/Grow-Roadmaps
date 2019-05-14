const express = require('express');
const next = require('next');
const proxy = require('http-proxy-middleware');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

if (!process.env.API_URL) {
  throw new Error('The API_URL cannot be empty. Add it to your .env file.');
}

app.prepare().then(() => {
  const server = express();

  server.use(
    proxy('/api', {
      target: process.env.API_URL,
      pathRewrite: { '^/api': '/' },
      changeOrigin: true,
    })
  );

  server.get('/profile/:username', (req, res) => {
    return app.render(req, res, '/profile', { username: req.params.username });
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
