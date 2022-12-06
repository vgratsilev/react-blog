import {
    DefinePlugin,
    HotModuleReplacementPlugin,
    ProgressPlugin,
    WebpackPluginInstance,
} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CopyPlugin from 'copy-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import { IBuildOptions } from './types/config';

export function buildPlugins({
    paths,
    isDev,
    analyzerMode,
    apiURL,
    project,
}: IBuildOptions): WebpackPluginInstance[] {
    const plugins = [
        new ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiURL),
            __PROJECT__: JSON.stringify(project),
        }),
        new CopyPlugin({
            patterns: [{ from: paths.locales, to: paths.buildLocales }],
        }),
        new CircularDependencyPlugin({ exclude: /node_modules/, failOnError: true }),
    ];

    if (isDev) {
        plugins.push(new ReactRefreshPlugin({ overlay: false }));
        plugins.push(new HotModuleReplacementPlugin());
        plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: true, analyzerMode }));
    }
    return plugins;
}
