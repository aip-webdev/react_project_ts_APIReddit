import React from "react";
import axios from "axios";
import express from 'express';
import compression from 'compression';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from "react-router-dom/server";
import helmet from 'helmet';
import {App} from "../App";
import {indexTemplate} from "./indexTemplate";

const PORT = process.env.PORT || 3000;

const app = express();
if (process.env.NODE_ENV === 'production') {
    app.use(compression());
    app.use(helmet({
        contentSecurityPolicy: false,
    }))
}
app.use('/static', express.static('./dist/client'));

app.get('/', async (req, res) => {
    await res.send(
        indexTemplate(ReactDOMServer.renderToString(
            <StaticRouter location={req.url}>
                {App()}
            </StaticRouter>
        ))
    )
});

app.get('/auth', async (req, res) => {
    await axios.post(
        'https://www.reddit.com/api/v1/access_token',
        `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
        {
            auth: {username: process.env.CLIENT_ID, password: 'DuLj8MgRlj_2QynWCXjusfb8gW1pCw'},
            headers: {'Content-type': 'application/x-www-form-urlencoded'}
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

app.listen(PORT, () => {
    /*if (process.env.NODE_ENV !== 'production')*/ console.log(`Server started on http://localhost:${PORT}`);
});
