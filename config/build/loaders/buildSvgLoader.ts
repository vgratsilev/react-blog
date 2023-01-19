export function buildSvgLoader() {
    return {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'preset-default',
                                params: {
                                    overrides: {
                                        removeViewBox: false,
                                    },
                                },
                            },
                            // {
                            //     name: 'convertColors',
                            //     params: {
                            //         currentColor: true,
                            //     },
                            // },
                            // {
                            //     name: 'addClassesToSVGElement',
                            //     params: {
                            //         className: 'app-icon',
                            //     },
                            // },
                        ],
                    },
                },
            },
        ],
    };
}
