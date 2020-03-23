module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  globals: {
    // cy: true,
    // Cypress: true,
  },
  rules: {
    'no-underscore-dangle': 0,
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'react/react-in-jsx-scope': 0,
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
  },
};
