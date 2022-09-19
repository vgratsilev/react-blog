import webpack from 'webpack';
import { buildWepbackConfig } from './config/build/buildWepbackConfig';
import { IBuildEnv, IBuildPath } from './config/build/types/config';
import path from 'path';

const paths: IBuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
};

export default (env: IBuildEnv) => {
    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 3000;

    const config: webpack.Configuration = buildWepbackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });

    return config;
}
