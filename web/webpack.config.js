const path = require('path');

const content = "./public/javascripts";

module.exports = {
	entry: './src/client/index.ts',
	output: {
		filename: './mieczozord.js',
		path: path.resolve(__dirname, content),
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'awesome-typescript-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ]
	},
	devtool: 'inline-source-map'
};