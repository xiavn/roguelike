module.exports = {
	entry: './src/app.js',
	output: {
		path: __dirname,
		filename: 'app.js'
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
				loaders: ["style", "css", "sass"]
			}
		]
	}
};