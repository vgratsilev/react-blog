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
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                moduleDirectory: ['node_modules', 'src/'],
            },
        },
    },
    rules: {
        indent: ['error', 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': 'off',
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
                ignoreAttribute: ['data-testid', 'to'],
            },
        ],
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'all',
                singleAttributePerLine: true,
            },
        ],
    },
    overrides: [
        {
            files: '**/src/**/*.test.{ts,tsx}',
            rules: { 'i18next/no-literal-string': 'off' },
        },
    ],
    globals: {
        __IS_DEV__: true,
    },
};
