module.exports = {
  env: {
    'jest/globals': true,
  },
  root: true,
  extends: ['@react-native-community'],
  plugins: ['prettier', 'mobx', 'jest'],
  rules: {
    semi: ['error', 'never'],
    'react/default-props-match-prop-types': ['error'],
    'react/sort-prop-types': ['error'],
    'react-native/no-inline-styles': 0,
    'prettier/prettier': 'error',
    'mobx/exhaustive-make-observable': 0,
    'mobx/unconditional-make-observable': 0,
    'mobx/missing-make-observable': 0,
    'mobx/missing-observer': 0,
    'mobx/no-anonymous-observer': 0,
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
}
