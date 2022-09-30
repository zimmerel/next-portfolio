/**
 * @type {import('jest').Config}
 */
const jestConfig = {
  setupFilesAfterEnv: ['testing/setup'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
};

export default jestConfig;
