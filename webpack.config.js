const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
    entry: [
        "./cardGame/startPage.js",
        "./cardGame/easyChallenge.js",
        "./cardGame/mediumChallenge.js",
        "./cardGame/hardChallenge.js",
        "/cardGame/lib/request.js",
        "./cardGame/style.css",
    ],
    mode: isProduction ? "production" : "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: "./cardGame/image", to: "static" }],
        }),
        new HtmlWebpackPlugin({
            template: "./cardGame/index.html",
        }),
        new MiniCssExtractPlugin(),
    ],
    optimization: {
        minimizer: ["...", new CssMinimizerPlugin()],
    },
    devtool: isProduction ? "hidden-source-map" : "source-map",
};
