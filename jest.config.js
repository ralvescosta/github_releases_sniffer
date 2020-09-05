module.exports = {
  preset: 'react-native',
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '.+\\.(png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  transform: {
    // '^.+\\.(js|ts|tsx)$':
    //   '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    '.+\\.(ts|tsx)$': 'babel-jest',
  },
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    '<rootDir>/jest/jest.setup.js',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  verbose: true,
};
