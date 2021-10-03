module.exports = {
    configureWebpack:{
        devServer:{
            proxy:{
                '/api':{
                    target: 'http://localhost:3000',
                },
            },
        },
    },
    css: {
        loaderOptions: {
          css: {
            // options here will be passed to css-loader
          },
        },
      },
}