module.exports = {
    presets: ['react'],
    addons: {
        eslint: {
            plugins: ['react-hooks'],
            rules: {
                'react/prop-types': 'off',
                'react-hooks/rules-of-hooks': 'error',
                'react-hooks/exhaustive-deps': 'warn',
            },
        },
    },
};
