const path = require('path');
const version = require('./package.json').version;
module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    library: 'PkgTest',
    filename: `pkg-test-${version}.min.js`,
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'], // 파일 확장자 해석 설정
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
