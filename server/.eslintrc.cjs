module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'comma-dangle': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'no-underscore-dangle': 'off',
  },
};
