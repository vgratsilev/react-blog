module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'airbnb',
        'plugin:import/typescript',
        'plugin:react/recommended',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
        'plugin:cypress/recommended',
        'prettier',
    ],
    plugins: [
        'import',
        'jsx-a11y',
        'react',
        'react-hooks',
        'react-perf',
        'i18next',
        '@typescript-eslint',
        'fsd-import',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                moduleDirectory: ['node_modules'],
            },
            alias: {
                map: [['@', './src']],
                extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
            },
        },
    },
    rules: {
        indent: ['off', 4, { SwitchCase: 1 }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-shadow': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'no-underscore-dangle': 'off',
        'react/jsx-curly-brace-presence': [2, 'always'],
        'react-perf/jsx-no-new-object-as-prop': 'error',
        'react-perf/jsx-no-new-array-as-prop': 'error',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'data-testid',
                    'to',
                    'target',
                    'direction',
                    'align',
                    'justify',
                    'gap',
                    'TitleTag',
                    'Tag',
                    'as',
                    'refName',
                    'borderRadius',
                ],
            },
        ],
        'jsx-a11y/aria-role': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'import/no-cycle': 'off',
        // 'import/order': [
        //     'error',
        //     {
        //         pathGroups: [
        //             {
        //                 pattern: '@/',
        //                 group: 'internal',
        //                 position: 'before',
        //             },
        //         ],
        //         'newlines-between': 'always',
        //     },
        // ],
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'all',
                singleAttributePerLine: true,
            },
        ],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'interface',
                format: ['PascalCase'],
                custom: {
                    regex: '^I[A-Z]',
                    match: true,
                },
            },
            {
                selector: 'typeAlias',
                format: ['PascalCase'],
                custom: {
                    regex: '^T[A-Z]',
                    match: true,
                },
            },
        ],
        'fsd-import/fsd-relative-path': ['error', { alias: '@' }],
        'fsd-import/public-api-imports': [
            'error',
            {
                alias: '@',
                testFilesPatterns: ['**/*.test.*', '**/*.story.*', '**/StoreDecorator.tsx'],
            },
        ],
        'fsd-import/layer-imports': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
            },
        ],
    },
    overrides: [
        {
            files: '**/src/**/*.test.{ts,tsx}',
            rules: { 'i18next/no-literal-string': 'off' },
        },
        {
            files: '**/src/**/*.stories.{ts,tsx}',
            rules: {
                'max-len': 'off',
                'i18next/no-literal-string': 'off',
                'react-perf/jsx-no-new-object-as-prop': 'off',
            },
        },
        {
            files: '**/src/**/*Slice.{ts,tsx}',
            rules: {
                'no-param-reassign': 'off',
                'no-plusplus': 'off',
            },
        },
        {
            files: '**/config/**/*.ts',
            rules: {
                'no-param-reassign': 'off',
            },
        },
        {
            files: '**/scripts/**/*.js',
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
                'import/extensions': 'off',
                'import/no-unresolved': 'off',
                'no-console': 'off',
            },
        },
        {
            files: ['**/cypress/support/**/*.ts'],
            rules: {
                '@typescript-eslint/no-namespace': 'off',
                '@typescript-eslint/naming-convention': 'off',
            },
        },
    ],
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
};
