import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import App from '../shared/App';

const app = express();

app.use(express.static('public'));

const appComponent = (req) => (
  <Router location={req.url}>
    <App />
  </Router>
);

app.get("*", (req, res) => {
  res.send(`
      <!DOCTYPE html>
      <head>
        <title>React Template</title>
        <link rel="stylesheet" href="/css/main.css">
        <script src="/bundle.js" defer></script>
      </head>
      <body>
        <div id="root">${renderToString(appComponent(req))}</div>
      </body>
    </html>
  `);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000');
});
