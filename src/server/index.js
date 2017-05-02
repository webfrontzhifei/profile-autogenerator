/*
* @Author: frontendzhifei
* @Date:   2017-04-25 23:14:13
* @Last Modified by:   frontendzhifei
* @Last Modified time: 2017-05-03 01:01:21
*/
import path from 'path';

import bodyParser from 'body-parser';
import chalk from 'chalk';
import cookieParser from 'cookie-parser';
import express from 'express';
import logger from 'morgan';
// import { debug, port } from './config';
// import apiRouter from './routes/api';
import pageRouter from './routes/page';
const debug = true;

const app = express();
app.set('port', 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false,
}));
app.use(cookieParser());
var staticPath = path.posix.join('/', 'static');
app.use(staticPath, express.static('./static'));

// app.use('/ajax', apiRouter);
// app.use('/:site/ajax', apiRouter);

app.use('/', pageRouter);
app.use('/:site/page', pageRouter);

if(debug) {
	require('../../build/setup-dev-server.js')(app);
}



app.use(function(req, res, next) {
	res.status(404).render('404.html');
});

app.use(function(err, req, res, next) {
	res.status(505).render('error.html', {
		msg: err
	});
});

app.listen(4000, () => {
	console.log(chalk.green(`[server start], port: 4000`));
})