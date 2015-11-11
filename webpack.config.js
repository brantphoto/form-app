module.exports = {
    entry: "./app/index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    devServer: {
      contentBase: "./app"
    },
    module: {
        loaders: [
            {
              test: /\.less$/,
              loader: 'style!css!less'
            }
        ]
    }
};
