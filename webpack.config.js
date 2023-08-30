const path = require('path');

module.exports = {
  entry: {
    router: './src/router.js'
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};