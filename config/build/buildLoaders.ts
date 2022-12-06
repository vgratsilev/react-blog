import webpack from 'webpack';
import { IBuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildUrlLoader } from './loaders/buildUrlLoader';
import { buildFileLoader } from './loaders/buildFileLoader';

// import { buildTypescriptLoader } from './loaders/buildTypescriptLoader';

export function buildLoaders(options: IBuildOptions): webpack.RuleSetRule[] {
    const svgUrlLoader = buildUrlLoader();
    const svgLoader = buildSvgLoader();
    const fileLoader = buildFileLoader();
    const cssLoader = buildCssLoader(options);
    // const typeScriptLoader = buildTypescriptLoader();
    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
    const tsxBabelLoader = buildBabelLoader({ ...options, isTsx: true });

    return [
        svgUrlLoader,
        svgLoader,
        fileLoader,
        codeBabelLoader,
        tsxBabelLoader,
        // typeScriptLoader,
        cssLoader,
    ];
}
