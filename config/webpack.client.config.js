const path = require('path');
const {HotModuleReplacementPlugin, DefinePlugin} = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const GLOBAL_CSS_REGEXP = /\.global\.css$/;
const DEV_PLUGINS = [new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: ['**/dist/client/', '**/dist/server/']
}), new HotModuleReplacementPlugin()];
const COMMON_PLUGINS = [
    new DefinePlugin({'process.env.CLIENT_ID': JSON.stringify(process.env.CLIENT_ID)}),
];

function setupDevtool() {
    if (IS_DEV) return 'eval';
    if (IS_PROD) return false;
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
