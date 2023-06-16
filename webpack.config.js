const path = require('path');
module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    library: 'PkgTest',
    filename: 'pkg-test.min.js',
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
