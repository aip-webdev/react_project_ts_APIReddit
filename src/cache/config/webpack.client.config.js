"use strict";
var path = require('path');
var _a = require('webpack'), HotModuleReplacementPlugin = _a.HotModuleReplacementPlugin, DefinePlugin = _a.DefinePlugin;
var CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
var NODE_ENV = process.env.NODE_ENV;
var IS_DEV = NODE_ENV === 'development';
var IS_PROD = NODE_ENV === 'production';
var GLOBAL_CSS_REGEXP = /\.global\.css$/;
var DEV_PLUGINS = [new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['**/dist/client/', '**/dist/server/']
    }), new HotModuleReplacementPlugin()];
var COMMON_PLUGINS = [new DefinePlugin({ 'process.env.CLIENT_ID': JSON.stringify(process.env.CLIENT_ID) })];
function setupDevtool() {
    if (IS_DEV)
        return 'eval';
    if (IS_PROD)
        return false;
}
module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
            'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom',
        }
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: IS_DEV ? [
        'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr',
        path.resolve(__dirname, '../src/client/index.js'),
    ] : [path.resolve(__dirname, '../src/client/index.js')],
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: 'client.js',
        publicPath: '/static/',
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            }
                        }
                    },
                    'sass-loader',
                ],
                exclude: GLOBAL_CSS_REGEXP,
            },
            {
                test: GLOBAL_CSS_REGEXP,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ],
    },
    devtool: setupDevtool(),
    plugins: IS_DEV
        ? DEV_PLUGINS.concat(COMMON_PLUGINS) : COMMON_PLUGINS,
    watchOptions: {
        ignored: ['**/dist/', '**/node_modules']
    },
    stats: "errors-only",
};
//# sourceMappingURL=webpack.client.config.js.map