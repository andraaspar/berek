var webpack = require("webpack");

var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: './tests.ts',
		vendor: ['jquery-ts']
	},
	resolve: {
		extensions: ['.ts', '.js'],
		modules: [
			'bower_components',
			'node_modules',
		],
	},
	module: {
		loaders: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader'
			},
		]
	},
	plugins: [
		new CleanWebpackPlugin(['build']),
		new HtmlWebpackPlugin({
			title: 'Berek Tests'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: ['index', 'vendor']
		}),
		// new webpack.optimize.UglifyJsPlugin({
		// 	compress: {
		// 		warnings: false
		// 	},
		// 	beautify: true,
		// 	output: {
		// 		indent_level: 0
		// 	}
		// }),
	],
	externals: {
	},
	output: {
		path: './build',
		filename: '[name].js'
	}
};