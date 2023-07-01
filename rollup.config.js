const replace = require('@rollup/plugin-replace')
const multi = require('@rollup/plugin-multi-entry');

module.exports = [{
  input: './src/**.js',
  output: {
    dir: 'lib/node',
    format: 'cjs',
    inlineDynamicImports: true
  },
  plugins: [
    multi({
      entryFileName: 'index.js'
    }),
    replace({
      'IS_BROWSER': false,
      preventAssignment: true,
      __buildDate__: () => JSON.stringify(new Date()),
      __buildVersion: 15
    })
  ]
}, {
  input: './src/**.js',
  output: {
    dir: 'lib/browser',
    format: 'es',
  },
  plugins: [
    multi({
      entryFileName: 'index.js'
    }),
    replace({
      'IS_BROWSER': true,
      preventAssignment: true,
      __buildDate__: () => JSON.stringify(new Date()),
      __buildVersion: 15
    })
  ]
}];