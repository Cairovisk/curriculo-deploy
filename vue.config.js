module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/curriculo-deploy/'
      : '/',

      css: {
        loaderOptions: {
          sass: {
            prependData: 
              `@import "@/styles/_variables.scss";`
          }
        }
      }
  }