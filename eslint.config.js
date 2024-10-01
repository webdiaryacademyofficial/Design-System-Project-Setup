import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['dist'], // Ignore build files
  },
  {
    files: ['**/*.{ts,tsx}'], // Target TypeScript files
    languageOptions: {
      parser: tsParser, // Use TypeScript parser
      ecmaVersion: 2020, // Set ECMAScript version
      globals: globals.browser, // Define browser globals
    },
    plugins: {
      'react-hooks': reactHooks, // Use React Hooks plugin
      'react-refresh': reactRefresh, // Use React Refresh plugin
      '@typescript-eslint': tsPlugin, // Use TypeScript plugin
      prettier, // Use Prettier plugin
    },
    rules: {
      ...js.configs.recommended.rules, // Include base ESLint rules
      ...tsPlugin.configs.recommended.rules, // Include TypeScript recommended rules
      ...reactHooks.configs.recommended.rules, // Include React Hooks recommended rules
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ], // Use React Refresh rule
      '@typescript-eslint/no-unused-vars': 'warn', // Example TypeScript rule
      'prettier/prettier': 'warn', // Prettier rule to enforce formatting
      '@typescript-eslint/no-empty-interface': 'off', // Disable empty interface rule
    },
  },
];
