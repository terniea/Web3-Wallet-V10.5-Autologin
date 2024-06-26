module.exports = {
  displayName: '/development',
  collectCoverageFrom: ['<rootDir>/build/transforms/**/*.js'],
  coverageDirectory: '../coverage',
  coverageReporters: ['json'],
  resetMocks: true,
  restoreMocks: false,
  testEnvironment: 'node',
  testMatch: ['<rootDir>/build/transforms/**/*.testing.js'],
  testTimeout: 2510,
};
