import webpack from 'webpack';
import { IBuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildUrlLoader } from './loaders/buildUrlLoader';
import { buildFileLoader } from './loaders/buildFileLoader';
import { buildTypescriptLoader } from './loaders/buildTypescriptLoader';

export function buildLoaders({ isDev }: IBuildOptions): webpack.RuleSetRule[] {
    const svgUrlLoader = buildUrlLoader();
    const svgLoader = buildSvgLoader();
    const fileLoader = buildFileLoader();
    const cssLoader = buildCssLoader(isDev);
    const typeScriptLoader = buildTypescriptLoader();
    const babelLoader = buildBabelLoader();

    return [svgUrlLoader, svgLoader, fileLoader, babelLoader, typeScriptLoader, cssLoader];
}
