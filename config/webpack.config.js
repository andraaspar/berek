const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
	mode: 'development',
	entry: {
		index: './tests.ts',
		vendor: ['jquery-ts']
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader',
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(['build']),
		new HtmlWebpackPlugin({
			title: 'Berek Tests'
		}),
		new CheckerPlugin(),
	],
	output: {
		path: path.resolve(__dirname, '../build'),
		filename: '[name].js'
	}
}
