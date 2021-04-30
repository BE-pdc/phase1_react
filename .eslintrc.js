module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['@babel'],
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'no-underscore-dangle': 0,
    'react/prop-types': [
      1,
      { ignore: ['ignore'], customValidators: ['customValidator'] },
    ],
    'new-cap': ['error', { newIsCap: false, capIsNew: false }],
  },
  globals: {
    fetch: false,
  },
};
