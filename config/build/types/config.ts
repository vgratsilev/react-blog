export type TBuildMode = 'development' | 'production';
type TAnalyzerMode = 'server' | 'static' | 'json' | 'disabled';

export interface IBuildPath {
    entry: string;
    build: string;
    html: string;
    src: string;
    assetDir: string;
    locales: string;
    buildLocales: string;
}

export interface IBuildEnv {
    mode: TBuildMode;
    port: number;
    analyzerMode: TAnalyzerMode;
    apiURL: string;
}

export interface IBuildOptions {
    mode: TBuildMode;
    paths: IBuildPath;
    isDev: boolean;
    port: number;
    analyzerMode: TAnalyzerMode;
    apiURL: string;
    project: 'storybook' | 'frontend' | 'jest';
}
