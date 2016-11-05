var autoprefixer = require('autoprefixer');

module.exports = {
	entry: './src/app.js',
	output: {
		path: __dirname,
		filename: 'main.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
	externals: {
		'cheerio': 'window',
		'react/lib/ExecutionEnvironment': true,
		'react/lib/ReactContext': true,
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.scss$/,
				loaders: ["style", "css", "postcss-loader", "sass"]
			}
		]
	},
	postcss: [ autoprefixer ]
};