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
    };
    config.resolve!.modules!.unshift(paths.src);

    config.resolve!.extensions!.push('.ts', '.tsx');

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
            __IS_DEV__: true,
            __API__: JSON.stringify(''),
        }),
    );

    return config;
};
