module.exports = {
  preset: 'react-native',
  setupFiles: ['./jest-setup.js'],
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    '!src/**/*.test.{ts,tsx,js,jsx}',
    '!src/**/Types.tsx',
  ],
  coverageReporters: ['text'],
  snapshotResolver: './config/jestSnapshotResolver.js',
};
