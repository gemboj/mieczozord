const path = require('path');

const content = "./public/javascripts";

function srcPath(subdir) {
	return path.join(__dirname, "../src", subdir);
}

module.exports = {
	entry: './src/browserIndex.ts',
	output: {
		filename: './mieczozord.js',
		path: path.resolve(__dirname, content),
		publicPath: '/'
	},
	module: {
		loaders: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader',
				exclude: /node_modules/,
				options: "",
				query: {
					// Use this to point to your tsconfig.json.
					configFileName: './src/tsconfig.json'
				}
			}
		]
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ],
		alias: {
			network: srcPath('network')
		}
	},
	devtool: 'inline-source-map'
};