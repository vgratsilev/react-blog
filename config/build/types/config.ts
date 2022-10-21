export type BuildMode = 'development' | 'production';
type AnalyzerMode = 'server' | 'static' | 'json' | 'disabled';

export interface IBuildPath {
    entry: string;
    build: string;
    html: string;
    src: string;
    assetDir: string;
}

export interface IBuildEnv {
    mode: BuildMode;
    port: number;
    analyzerMode: AnalyzerMode;
    apiURL: string;
}

export interface IBuildOptions {
    mode: BuildMode;
    paths: IBuildPath;
    isDev: boolean;
    port: number;
    analyzerMode: AnalyzerMode;
    apiURL: string;
}
