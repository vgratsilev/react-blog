export function buildUrlLoader() {
    return {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/, // *.svg?url
    };
}
