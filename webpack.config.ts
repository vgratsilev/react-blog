import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { IBuildEnv, IBuildPath, TBuildMode } from './config/build/types/config';

function getApiUrl(mode: TBuildMode, apiUrl?: string) {
    if (apiUrl) {
        return apiUrl;
    }
    if (mode === 'production') {
        return '/'; // /api
    }

    return 'http://localhost:8000';
}

export default (env: IBuildEnv) => {
    const paths: IBuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        assetDir: 'static',
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'build', 'locales'),
    };

    const mode = env?.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env?.port || 3000;
    const analyzerMode = env?.analyzerMode || 'disabled';
    const apiURL = getApiUrl(mode, env?.apiURL);

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        analyzerMode,
        apiURL,
        project: 'frontend',
    });

    return config;
};
