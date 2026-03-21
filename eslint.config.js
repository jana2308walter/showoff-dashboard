import tsEslint from 'typescript-eslint';
import angular from 'angular-eslint';
import js from '@eslint/js';

export default tsEslint.config(
  {
    ignores: ['**/dist/**', '**/node_modules/**']
  },
  js.configs.recommended,
  ...tsEslint.configs.recommended,
  ...tsEslint.configs.stylistic,
  {
    files: ['**/*.ts'],
    extends: [...angular.configs.tsRecommended],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/no-lifecycle-call': 'error',
      '@angular-eslint/prefer-output-readonly': 'error',
      '@angular-eslint/no-input-rename': 'off'
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    }
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended],
    rules: {}
  }
);
