module.exports = {
  // Use the default Create React App Jest configuration as base
  ...require('react-scripts/scripts/utils/createJestConfig')(() => { }, __dirname),

  // Add module name mapping for SVG files
  moduleNameMapper: {
    // Handle CSS modules (if any)
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Handle SVG files
    '\\.(svg)$': 'jest-transform-stub',
    // Handle other assets
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'jest-transform-stub',
  },

  // Ensure proper test environment
  testEnvironment: 'jsdom',

  // Setup files
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],

  // Coverage configuration
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.js',
    '!src/setupTests.js',
  ],

  // Coverage thresholds (optional)
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
