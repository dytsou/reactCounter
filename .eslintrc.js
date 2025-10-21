module.exports = {
  extends: [
    'react-app',
    'react-app/jest'
  ],
  rules: {
    // Add any custom rules here
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'prefer-const': 'error'
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  }
};
