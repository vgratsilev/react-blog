import path from 'path';
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import { IBuildPath } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: { config: Configuration }) => {
    const paths: IBuildPath = {
        build: '',
        html: '',
        entry: '',
        assetDir: '',
        src: path.resolve(__dirname, '../../src'),
        locales: '',
        buildLocales: '',
    };
    config.resolve!.modules!.unshift(paths.src);

    config.resolve!.extensions!.push('.ts', '.tsx');
    config!.resolve!.alias = {
        ...config!.resolve!.alias,
        '@': path.resolve(__dirname, '..', '..', 'src'),
    };

    const rules = config.module!.rules as RuleSetRule[];
    config.module!.rules = rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return {
                ...rule,
                exclude: /\.svg$/i,
            };
        }
        return rule;
    });
    config.module!.rules.push(buildSvgLoader());

    config.module!.rules.push(buildCssLoader(true));

    config.plugins!.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('https://testapi.com'),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );

    return config;
};
