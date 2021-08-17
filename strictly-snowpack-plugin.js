const strictly = require("@strictly-lang/compiler")

module.exports = function (_snowpackConfig, _pluginOptions) {
  return {
    name: 'strictly-plugin',
    resolve: {
      input: ['.sly'],
      output: ['.js'],
    },
    load({ filePath }) {
      return strictly({ cwd: __dirname, filePath })
    },
  };
};