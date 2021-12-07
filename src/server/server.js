import React from "react";
import axios from "axios";
import express from 'express';
import compression from 'compression';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from "react-router-dom/server";
import helmet from 'helmet';
import {App} from "../App";
import {indexTemplate} from "./indexTemplate";

const IS_PROD = process.env.NODE_ENV !== 'development';
const PORT = process.env.PORT ?? 3000;
let URI = IS_PROD ? `https://app-reddit-react.herokuapp.com` : `http://localhost:${PORT}`
const app = express();
/*if (IS_PROD) {
    app.use(compression());
    app.use(helmet({
        contentSecurityPolicy: false,
    }))
}*/

const reqHandler = async (req, res) => {
    res.send(
        indexTemplate(ReactDOMServer.renderToString(
            <StaticRouter location={req.url}>
                {App()}
            </StaticRouter>
        ))
    )
};

app.use('/static', express.static('./dist/client'));
app.use('/img-src', express.static('./dist/img-src'));
app.get('/auth', async (req, res) => {
    axios.post(
        'https://www.reddit.com/api/v1/access_token',
        `grant_type=authorization_code&code=${req.query.code}&redirect_uri=${URI}/auth`,
        {
            auth: {username: process.env.CLIENT_ID, password: process.env.PASSWORD},
            headers: {'Content-type': 'application/x-www-form-urlencoded'},
        }
    )
        .then(({data}) => {
            res.send(
                indexTemplate(ReactDOMServer.renderToString(
                    <StaticRouter location={req.url}>
                        {App()}
                    </StaticRouter>
                ), data['access_token'])
            )
        })
        .catch(console.log)
});

app.get('*', reqHandler);

app.listen(PORT, () => {
   !IS_PROD && console.log(`Server started on ${URI} `);
});
