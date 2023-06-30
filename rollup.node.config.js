const replace = require('@rollup/plugin-replace')

module.exports = {
	input: './seq_logger.js',
	output: {
    file: 'lib/node/seq_logger.cjs',
    format: 'cjs',
  },
  plugins: [
    replace({
      'IS_BROWSER': false,
      preventAssignment: true,
      __buildDate__: () => JSON.stringify(new Date()),
      __buildVersion: 15
    })
  ]
};