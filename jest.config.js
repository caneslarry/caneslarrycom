const nextJest = require('next/jest');

const createJestConfig = nextJest({
    dir: './',
});

const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        // Handle CSS imports (e.g., import styles from './Button.module.css')
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        // Handle module aliasing in tests (matches `tsconfig.json` paths)
        '^@/(.*)$': '<rootDir>/app/$1',
    },
    testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
