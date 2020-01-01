module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended'
  ],
  rules: {
    'indent': ['error',
      2,
      {
        'SwitchCase': 1,
        'MemberExpression': 1,
        'ArrayExpression': 1,
        'FunctionDeclaration': { 'parameters': 'first' },
        'CallExpression': { 'arguments': 1 },
        'ImportDeclaration': 'first',
        'ObjectExpression': 1
      }
    ],
    'no-sequences': 'error',
    'linebreak-style': 'off',
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'semi-style': ['error', 'last'],
    'semi-spacing': ['error', { 'before': false, 'after': true }],
    'camelcase': 'off',
    'default-case': 'error',
    'no-new-func': 'error',
    'no-void': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'no-tabs': 'error',
    'no-var': 'error',
    'one-var': ['error', 'never'],
    'prefer-const': 'error',
    'no-trailing-spaces': 'error',
    'operator-assignment': ['error', 'always'],
    'dot-location': ['error', 'property'],
    'no-alert': 'error',
    'no-else-return': ['error', { allowElseIf: false }],
    'no-case-declarations': 'off',
    'no-unused-vars': 'error',
    'no-multi-spaces': 'error',
    'valid-jsdoc': 'warn',
    'eqeqeq': 'error',
    'guard-for-in': 'warn',
    'no-multi-str': 'error',
    'no-return-await': 'error',
    'no-return-assign': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-use-before-define': 'warn',
    'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true, 'mode': 'strict' }],
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    'space-before-blocks': ['error', { 'functions': 'always', 'keywords': 'always', 'classes': 'always' }],
    'spaced-comment': ['error', 'always'],
    'space-infix-ops': 'error',
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'no-useless-constructor': 'warn',
    'comma-dangle': ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
    'no-param-reassign': 'off',
    'object-curly-spacing': ['error', 'always'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    '$': true
  }
}
