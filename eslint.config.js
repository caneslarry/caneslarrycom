import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';
import ts from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import react from 'eslint-plugin-react';

/** @type {import("eslint").FlatConfig[]} */
export default [
  {
    ignores: [
      'node_modules/',
      '.next/',
      'out/',
      'dist/',
      'coverage/',
      'public/',
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',
      'pnpm-debug.log*',
      '.DS_Store',
      'Thumbs.db',
      '.env',
      '.env.*',
      '*.d.ts',
      '*.tsbuildinfo',
      '.vscode/',
      '.idea/',
      'jest.config.js',
      'jest.config.cjs',
      'postcss.config.js',
      'postcss.config.cjs',
    ],
  },
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: ts,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true }, // ✅ Enable JSX in TypeScript
      },
      globals: {
        window: 'readonly', // ✅ Browser global
        document: 'readonly', // ✅ Browser global
        navigator: 'readonly', // ✅ Browser global
        React: 'readonly', // ✅ Fix: React is now recognized globally
        localStorage: 'readonly', // ✅ Fix: React is now recognized globally
        it: 'readonly', // ✅ Jest global
        expect: 'readonly', // ✅ Jest global
        describe: 'readonly', // ✅ Jest global
        beforeEach: 'readonly', // ✅ Jest global
        afterEach: 'readonly', // ✅ Jest global
        clearInterval: 'readonly', // ✅ Fix: Recognize clearInterval as a global function
        setInterval: 'readonly', // ✅ Ensure setInterval is also recognized
        setTimeout: 'readonly', // ✅ Include setTimeout for consistency
        clearTimeout: 'readonly', // ✅ Include clearTimeout for consistency
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: pluginPrettier,
      react,
    },
    rules: {
      ...prettier.rules,
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': 'warn',
      'react/react-in-jsx-scope': 'off', // ✅ Fix: No need to import React
    },
  },
];
