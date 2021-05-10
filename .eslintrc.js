module.exports = {
    "env": {
        "es6": true,
        "es2017": true,
        "es2020": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module",
        "spread": true
    },
    "rules": {
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "comma-dangle": [
            "error",
            "never"
        ],
        "keyword-spacing": [
            "error"
        ],
        "key-spacing": [
            "error"
        ],
        "arrow-spacing": [
            "error"
        ],
        "space-infix-ops": [
            "error",
            {
                "int32Hint": true
            }
        ],
        "semi-spacing": "error",
        "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
        "camelcase": "warn",
        "new-cap": "error",
        "space-before-blocks": "error",
        "no-var": "error",
        "no-unreachable": "error",
        "comma-spacing": "error",
        "computed-property-spacing": ["error", "never"],
        "curly": ["error", "all"],
        "no-unneeded-ternary": "error",
        "no-console": "off",
        "no-useless-catch": "off",
        "no-prototype-builtins": "off"
    }
};