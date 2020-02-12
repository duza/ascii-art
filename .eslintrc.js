module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  // settings: {
  //   'import/resolver': 'webpack'
  // },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // "import/no-extraneous-dependencies": [
    //   1, {"devDependencies": true}
    // ],
    // "react/jsx-one-expression-per-line": 0,
    // "indent": ["error", 2, {"SwitchCase": 1}],
    // "max-len": ["error", 120],
    // "comma-dangle": ["error", "only-multiline"],
    // "curly": [2, "all"],
    "arrow-parens": [2, "as-needed"],
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-sort-props": ["error", {
      "ignoreCase": false,
      "reservedFirst": false,
      "callbacksLast": false,
      "shorthandFirst": false,
      "shorthandLast": false
    }],
    "react/forbid-prop-types": 0,
    // "import/no-dynamic-require": 0,
    "react/require-default-props": 0,
    // "react/destructuring-assignment": [2, "always", { "ignoreClassFields": true }],
    // "import/prefer-default-export": 0,
    // "object-curly-newline": ["error", { "multiline": true, "consistent": true }],
    // "react/jsx-filename-extension": 0,
    // "react/jsx-curly-newline": ["error", {
    //   "singleline": "consistent",
    //   "multiline": "forbid"
    // }],
    // "jest/no-disabled-tests": "warn",
    // "jest/no-focused-tests": "error",
    // "jest/no-identical-title": "error",
    // "jest/valid-expect": "error",
    // "no-use-before-define": ["error", {"functions": false}],
    // "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    // "react-hooks/rules-of-hooks": "error",
    // "react-hooks/exhaustive-deps": "warn",
    // "sort-destructure-keys/sort-destructure-keys": [2, { "caseSensitive": true }],
    // "sort-keys": ["error", "asc", { "caseSensitive": true, "natural": true, "minKeys": 2 }],
    // "quotes": ["error", "single", { "allowTemplateLiterals": true }]
  },
};
