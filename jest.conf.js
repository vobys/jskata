module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  rootDir: './',
  testURL: 'http://localhost/',
  coverageDirectory: '<rootDir>',
  testMatch: ['<rootDir>/spec/**/+(*.)+(spec.ts?(x))'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    '\\.(css|scss)$': 'identity-obj-proxy'
  },
  reporters: [
    'default',
    [ 'jest-junit', { output: './TESTS-results.xml' } ]
  ],
  testResultsProcessor: 'jest-sonar-reporter',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  globals: {
    'ts-jest': {
      tsConfigFile: './tsconfig.test.json'
    }
  }
};
