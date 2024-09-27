module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "prettier"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    env: {
        node: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
    },
    rules: {
        // Add custom rules here
        indent: ["error", 2],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "single"],
        semi: ["error", "always"],
        "no-console": "warn",
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "prettier/prettier": "error",
    },
};