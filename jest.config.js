module.exports = {
  preset: 'react-native',
  roots: ['<rootDir>/src'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/**/*.d.ts',
    '!<rootDir>/src/index.tsx',
    '!<rootDir>/src/**/*.module.tsx',
    '!<rootDir>/src/navigation/presenter/**',
    '!<rootDir>/src/core/**',
    '!<rootDir>/src/dashboard/**',
    '!<rootDir>/src/search/presenter/**',
    '!<rootDir>/src/settings/**',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '.+\\.(png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  transform: {
    '.+\\.(ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(jest-)?react-native|@?react-navigation)'],
  setupFiles: ['<rootDir>/jest/jest.setup.js'],
  verbose: true,
};
