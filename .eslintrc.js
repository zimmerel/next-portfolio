/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  extends: ['portfolio'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
