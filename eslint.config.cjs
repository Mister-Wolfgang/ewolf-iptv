const rnPlugin = require('@react-native-community/eslint-plugin');

module.exports = [
  {
    ignores: ['**/node_modules/**', '**/android/**', '**/ios/**'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: { __DEV__: 'readonly' },
    },
  },
  ...(rnPlugin && rnPlugin.configs && rnPlugin.configs.recommended
    ? [rnPlugin.configs.recommended]
    : []),
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      eqeqeq: ['error', 'always'],
      'prefer-const': 'warn',
      "@typescript-eslint/no-empty-interface": "error"
    },
  },
];
