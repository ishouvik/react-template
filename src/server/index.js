import express from 'express';
import React from 'react';
import cors from 'cors';
import ReactDOMServer, { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import serialize from 'serialize-javascript';
import App from '../shared/App';

// Redux setup
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from '../shared/config/store';

const app = express();
app.use(cors());
app.use(express.static('public'));

app.get('*', (req, res) => {
  const { store } = configureStore();
  const context = {};
  const initialData = store.getState();
  const markup = renderToString(
    <Provider store={store}>
      <Router location={req.url} context={context}>
        <App />
      </Router>
    </Provider>
  );

  res.set('Cache-Control', 'public, max-age=600 s-maxage=1200');
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>React Template</title>
        <link rel='stylesheet' href='/css/main.css'>
        <script src='/bundle.js' defer></script>
        <script>window.__initialData__ = ${serialize(initialData)}</script>
      </head>
      <body>
        <div id='root'>${markup}</div>
      </body>
    </html>
  `);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000');
});
