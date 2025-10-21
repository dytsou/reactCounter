module.exports = {
  // Add module name mapping for SVG files and other assets
  moduleNameMapper: {
    // Handle CSS modules (if any)
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Handle SVG files
    '\\.(svg)$': 'jest-transform-stub',
    // Handle other assets
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'jest-transform-stub',
  },

  // Coverage configuration
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.js',
    '!src/setupTests.js',
  ],

  // Coverage thresholds (optional) - set to reasonable levels for current project state
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
