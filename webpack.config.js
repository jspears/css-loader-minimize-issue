var webpack = require("webpack"),
    path = require('path');

module.exports = {
    sourceMap: 'source-map',
    entry: {
        app: "./test.js"
    },
    output: {
        path: __dirname,
        filename: "compiled.js",
        publicPath: "/public"
    },
    module: {
        loaders: [
            {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'},
            {
                test: /\.css$/,
                loader: 'style!css?minimize'
            }
        ]
    }

};
