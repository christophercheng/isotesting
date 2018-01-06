import express from 'express';
import { renderToString } from 'react-dom/server';
import React from 'react';

import Menu from './src/components/Menu';
import data from './recipes.json';

global.React = React;

const ssrHTML = renderToString(<Menu recipes={data} />);

const respond = (req, res) => {
  res.status(200).send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>
          React Isomorphic Test 2
        </title>
      </head>
      <body>
        <div id="react-container">
          ${ssrHTML}
        </div>
        <script>window.__DATA__=${JSON.stringify(data)}</script>
        <script src="bundle.js"></script>
      </body>
    </html>`);
};

const app = express().use(express.static('./assets')).use(respond);
app.listen(3000, () => console.log(ssrHTML));

