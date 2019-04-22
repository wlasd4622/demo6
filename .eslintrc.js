module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'semi': ['error', 'always'],
    "quotes": ["error", "single"],
    'space-before-function-paren': 'off',
    'spaced-comment': 'off',
    'no-unused-vars': 'off',
    'brace-style': 'off',
    'no-useless-escape': 'off',
    'no-undef': 0,
    'no-console': 0,
    'no-empty': 0,
    'no-mixed-space': 0,
    'no-cond-assign': 0,
    'no-constant-condition': 0,
    'no-global-assign':0
  }
};
