export default {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    'scss/dollar-variable-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
    'order/properties-alphabetical-order': true
  },
  ignoreFiles: ['**/node_modules/**', 'dist/**']
};
