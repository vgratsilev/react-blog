import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { IBuildEnv, IBuildPath } from './config/build/types/config';

const paths: IBuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    assetDir: 'static',
};

export default (env: IBuildEnv) => {
    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 3000;
    const analyzerMode = env.analyzerMode || 'disabled';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        analyzerMode,
    });

    return config;
};
