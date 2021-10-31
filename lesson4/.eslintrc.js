module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-trailing-spaces': 0,
    indent: 0,
    'key-spacing': 0,
    semi: 0,
    'padded-blocks': 0,
    'no-multiple-empty-lines': 0,
    "no-tabs": 0,
    "space-before-function-paren": ["error", "never"],
    "eol-last": 0,
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    // 'no-console': 'off',
    // 'no-debugger': 'off'
    quotes: [2, "backtick", "avoid-escape"],
    quotes: [2, "single", "avoid-escape"]
  },

  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ]
}
