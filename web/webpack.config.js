const path = require('path');

const content = "./public/javascripts";

module.exports = {
	entry: './src/client/index.js',
	output: {
		filename: 'mieczozord.js',
		path: path.resolve(__dirname, content),
		publicPath: '/'
	},
	devtool: 'inline-source-map'
};