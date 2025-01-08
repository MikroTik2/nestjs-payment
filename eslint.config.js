const eslint = require('@eslint/js');
const globals = require('globals');

const tseslint = require('typescript-eslint');

const eslintConfigPrettier = require('eslint-config-prettier');

module.exports = [
  {
    ignores: ['**/eslint.config.js'],
  },

  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  eslintConfigPrettier,

  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },

      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },

    // Rules
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',

      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'import/extensions': 'off',
      'import/prefer-default-export': 'off',
      'class-methods-use-this': 'off',
      'no-useless-constructor': 'off',
      'import/no-unresolved': 'off',
      'no-control-regex': 'off',
      'no-shadow': 'off',
      'import/no-cycle': 'off',
      'consistent-return': 'off',
      'no-underscore-dangle': 'off',
      'max-classes-per-file': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',

      'no-restricted-syntax': [
        'error',
        {
          selector: 'LabeledStatement',
          message:
            'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        },
        {
          selector: 'WithStatement',
          message:
            '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        },
        {
          selector: "MethodDefinition[kind='set']",
          message: 'Property setters are not allowed',
        },
      ],
    },
  },
];

