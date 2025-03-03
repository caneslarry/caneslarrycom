export default {
  testEnvironment: 'jest-environment-jsdom', // ✅ Simulates the browser environment
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // ✅ Setup file for Jest
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1', // ✅ Supports absolute imports
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest', // ✅ Transpiles TypeScript files for Jest
  },
};
