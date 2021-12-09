const {DefinePlugin} = require("webpack");

const path = require('path');
const nodeExternals = require('webpack-node-externals');

const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_CSS_REGEXP = /\.global\.scss$/;

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
    plugins: [new DefinePlugin({
        'process.env.CLIENT_ID': JSON.stringify(process.env.CLIENT_ID),
        'process.env.CODE_SECRET': JSON.stringify(process.env.CODE_SECRET),
        'process.env.MY_URI': JSON.stringify(process.env.MY_URI),
    })],
    optimization: {
        minimize: false,
    },
};
