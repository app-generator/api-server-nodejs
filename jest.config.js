module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  setupFiles: ['dotenv/config'],
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['node_modules'],
  coverageReporters: ['text', 'lcov', 'clover', 'html'],
};