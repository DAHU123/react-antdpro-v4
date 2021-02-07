module.exports = {
  extends: [ require.resolve('@umijs/fabric/dist/eslint') ],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
  },
  rules: {
    "no-param-reassign": 0,
    "default-case": 0,
    'react/jsx-wrap-multilines': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/no-unresolved': [ 2, { ignore: [ '^@/', '^umi/' ] } ],
    'import/no-extraneous-dependencies': [ 0, { optionalDependencies: true } ],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    "array-bracket-spacing": [ "error","always" ],
    "semi": [ 1,"never" ],
    '@typescript-eslint/no-this-alias': [ 'off' ],
    "object-curly-spacing": [ "error","always" ]
  },
}
