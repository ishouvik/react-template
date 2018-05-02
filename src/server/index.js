import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import App from '../shared/App';

// Redux setup
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from '../shared/config/store';

let { store } = configureStore();

const app = express();
app.use(express.static('public'));

const appComponent = (req) => (
  <Provider store={store}>
    <Router location={req.url}>
      <App />
    </Router>
  </Provider>
);

app.get('*', (req, res) => {
  res.send(`
      <!DOCTYPE html>
      <head>
        <title>React Template</title>
        <link rel='stylesheet' href='/css/main.css'>
        <script src='/bundle.js' defer></script>
      </head>
      <body>
        <div id='root'>${renderToString(appComponent(req))}</div>
      </body>
    </html>
  `);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000');
});
