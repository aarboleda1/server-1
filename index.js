import db from './db';
import http from 'http';
import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import bodyParser from 'body-parser';
import router from './routers';

const app = express();
app.server = http.createServer(app);

const port = process.env.PORT || 8000;

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());

app.use('/api', router);

app.listen(port, console.log.bind(this, 'Listening on port:', port));
