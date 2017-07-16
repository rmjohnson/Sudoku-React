const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'src/app.js'),
	output: {
		path: path.resolve(__dirname, 'build/js'),
		filename: 'app.js',
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/, loader: 'babel-loader', },
			{ test: /\.less$/, loader: ['style-loader', 'css-loader?url=false', 'less-loader'] }
		],
	},
	resolve: {
  		extensions: ['.js', '.jsx']
	}
};