const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { plugins } = require("@babel/preset-env/lib/plugins-compat-data");

process.env.NODE_ENV = "development";

module.exports = {
	mode: "development",
	target: "web",
	devtool: "cheap-module-source-map",
	// entry: "./src/index",
	output: {
		path: path.resolve(__dirname, "build"),
		publicPath: "/",
		filename: "bundle.js",
	},

	devServer: {
		static: "minimal",
		client: {
			overlay: true,
		},
		historyApiFallback: true,
		// disableHostCheck: true,
		headers: { "Access-Control-Allow-Origin": "*" },
		https: false,
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.json$./,
				use: ["json-loader"],
			},
			{
				test: /\.html$./,
				use: { loader: "html-loader" },
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "public/index.html",
			favicon: "./public/favicon.ico",
		}),
	],
};
