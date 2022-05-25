module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      // eslint-disable-next-line no-param-reassign
      args[0].title = "IntelliKid Systems";
      return args;
    });
  },

  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false,
    },
  },

  transpileDependencies: ["quasar"],
};
