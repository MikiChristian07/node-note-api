module.exports = {
    env: {
        es2021: true,
        node: true
    },
    extends: ['airbnb-base'],
    parserOptions: {
        ecmaVersion: 12
    },
    rules: {
        indent: ['error', 4],
        'comma-dangle': ['error', 'never'],
        // 'linebreak-style': ['error', 'windows'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-underscore-dangle': [
            'error', { allowAfterThis: true, allow: ['_id'] }

        ]
    }
};
