"use strict";
var DefinePlugin = require("webpack").DefinePlugin;
var path = require('path');
var nodeExternals = require('webpack-node-externals');
var NODE_ENV = process.env.NODE_ENV;
var GLOBAL_CSS_REGEXP = /\.global\.scss$/;
module.exports = {
    target: 'node',
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, '../src/server/server.js'),
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: 'server.js'
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                                exportOnlyLocals: true,
                            },
                        }
                    },
                    'sass-loader',
                ],
                exclude: GLOBAL_CSS_REGEXP,
            },
            {
                test: GLOBAL_CSS_REGEXP,
                use: ['css-loader', 'sass-loader'],
            }
        ],
    },
    plugins: [new DefinePlugin({ 'process.env.CLIENT_ID': JSON.stringify(process.env.CLIENT_ID) })],
    optimization: {
        minimize: false,
    },
};
//# sourceMappingURL=webpack.server.config.js.map