module.exports = {
  extends: [
    '@commitlint/config-conventional',
    '@commitlint/config-lerna-scopes',
  ],
  rules: {
    'scope-case': [2, 'always', ['lower-case', 'pascal-case', 'camel-case']],
    'scope-enum': [
      2,
      'always',
      [
        'framework',
        'mobile',
        'web-cra',
        'web-nextjs',
        'desktop-electron',
        'components',
      ],
    ],
    'scope-empty': [2, 'never'],
    'header-max-length': [2, 'always', 130],
  },
}
