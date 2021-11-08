const conf = {
  mode: 'development',
  context: __dirname,
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    client: {
      overlay: true
    },
    static: ['public'],
    watchFiles: ['public/**/*'],
    open: true,
    hot: true,
    port: 3030,
    historyApiFallback: true // React Router
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  }
};

module.exports = (env, options) => {
  let isProd = options.mode === 'production';
  conf.devtool = isProd ? false : 'eval-cheap-module-source-map';
  conf.target = isProd ? 'browserslist' : 'web';

  return conf;
};
