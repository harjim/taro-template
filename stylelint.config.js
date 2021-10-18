// basic rules
// eslint-disable-next-line import/no-commonjs
module.exports = {
  extends: ['stylelint-config-standard'],
  ignoreFiles: ['**/*.js', '**/*.md', '**/*.ts', '**/*.jsx', '**/*.tsx'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['function', 'if', 'each', 'include', 'mixin']
      }
    ],
    'no-empty-source': null,
    'rule-empty-line-before': 'never',
    'at-rule-empty-line-before': null,
    'no-missing-end-of-source-newline': null,
    'selector-list-comma-newline-after': null,
    'font-family-no-missing-generic-family-keyword': null,
    'indentation': 2,
  }
}
