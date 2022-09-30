/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['next/core-web-vitals', 'turbo', 'prettier'],
  ignorePatterns: ['node_modules', 'dist'],
};
