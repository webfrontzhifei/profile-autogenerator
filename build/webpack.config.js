var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		// app: './src/client/common/index.js',
		app:  ['webpack-hot-middleware/client?path=common/__webpack_hmr',
                './src/client/common/index.js']
	},	
	output: {
		path: path.resolve(__dirname, '../dist/static/'),
		publicPath: '/static/',
		filename: '[name].js',
		chunkFilename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {

					}
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	plugins: [
	 	new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			filename: path.resolve(__dirname, '../dist/views/test.html'),
			template: path.resolve(__dirname, '../src/server/views/test.html'),
			inject: true
		})
	]
};
