export default {
  testEnvironment: 'jest-environment-jsdom', // ✅ Simulates a browser environment
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // ✅ Jest setup file
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1', // ✅ Supports absolute imports
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      'babel-jest',
      {
        presets: ['next/babel'], // ✅ Use Next.js Babel preset for transformation
      },
    ],
  },
  transformIgnorePatterns: ['/node_modules/(?!(next)/)'], // ✅ Ensures Next.js modules are transformed
};
