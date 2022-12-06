import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { IBuildOptions } from '../types/config';

export function buildCssLoader({ isDev }: IBuildOptions) {
    return {
        test: /\.(sa|sc|c)ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: /\.module\.s?css$/i,
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                        exportLocalsConvention: 'camelCase',
                    },
                },
            },
            'sass-loader',
        ],
    };
}
