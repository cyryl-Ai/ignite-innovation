module.exports = {
    // ... other webpack configuration options ...
    module: {
      rules: [
        // ... other rules ...
        {
          test: /\.html$/,
          loader: 'raw-loader',
        },
      ],
    },
  };
  