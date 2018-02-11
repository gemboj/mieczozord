const path = require('path');

module.exports = {
	entry: './src/client/index.js',
	output: {
		filename: 'mieczozord.js',
		path: path.resolve(__dirname, './web/public/javascripts')
	},
	devtool: 'inline-source-map'
};