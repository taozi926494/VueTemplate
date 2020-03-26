module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                  @import "@/style/theme.scss";
                `
            }
        }
    }
}