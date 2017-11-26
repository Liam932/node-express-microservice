module.exports = {
    "extends": "airbnb-base",
    "env": {
        "mocha": true,
    },
    "plugins": [
        "prettier"
    ],
    globals: {
        expect: true
    },
    "rules": {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                trailingComma: 'all'
            },
        ],
    }
};
