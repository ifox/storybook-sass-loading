module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '~components(.*)$': '<rootDir>/src/components/$1'
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2|md|txt)$':
      'jest-transform-stub'
  },
  testURL: 'http://localhost/',
  collectCoverage: false,
  collectCoverageFrom: ['**/*.{js,vue}', '!**/node_modules/**']
};
