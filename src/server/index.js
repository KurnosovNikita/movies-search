import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import {Provider} from 'react-redux';
import store from "../app-common/store/index";
import {StaticRouter} from 'react-router-dom';
import App from '../app-common/components/app/app.component';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('./build'));

app.get('/*', (req, res) => {
    const app = ReactDOMServer.renderToString(
      <StaticRouter
        location={req.url}
        context={{}}>
          <Provider store={store}>
              <App/>
          </Provider>
      </StaticRouter>);

    const indexFile = path.resolve('./public/index.html');

    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }

        return res.send(
          data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        );
    });
});

app.listen(PORT, () => {
    console.log(`😎 Server is listening on port ${PORT}`);
});