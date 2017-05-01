const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfigs = require('./webpack.config.js');

module.exports = function setupDevServer(app) {
	const compiler = webpack(webpackConfigs);
	app.use(webpackDevMiddleware(compiler, {
		publicPath: webpackConfigs.output.publicPath,
		noInfo: true, 
		stats: 'errors-only',
	}));
}