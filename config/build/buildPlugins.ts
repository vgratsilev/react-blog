import { DefinePlugin, HotModuleReplacementPlugin, ProgressPlugin, WebpackPluginInstance } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { IBuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins({ paths, isDev }: IBuildOptions): WebpackPluginInstance[] {
    return [
        new ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new DefinePlugin(({
            __IS_DEV__: JSON.stringify(isDev),
        })),
        new HotModuleReplacementPlugin(),
    ];
}
