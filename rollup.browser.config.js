const replace = require('@rollup/plugin-replace')

module.exports = {
	input: './seq_logger.js',
	output: {
    file: 'lib/browser/seq_logger.cjs',
    format: 'cjs',
  },
  plugins: [
    replace({
      'IS_BROWSER': true,
      preventAssignment: true,
      __buildDate__: () => JSON.stringify(new Date()),
      __buildVersion: 15
    })
  ]
};