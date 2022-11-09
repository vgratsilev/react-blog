export function buildBabelLoader(isDev: boolean) {
    return {
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    //     [
                    //         'i18next-extract',
                    //         {
                    //             locales: ['en', 'ru'],
                    //             keyAsDefaultValue: false,
                    //             saveMissing: false,
                    //             discardOldKeys: true,
                    //             outputPath: 'public/locales/{{locale}}/{{ns}}.json',
                    //         },
                    //     ],
                    isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
            },
        },
    };
}