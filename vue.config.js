module.exports = {
  configureWebpack: {
    devtool: "source-map",
  },
  pwa: {
    iconPaths: {
      favicon32: "img/icons/favicon-32x32.png",
      favicon16: "img/icons/favicon-16x16.png",
      appleTouchIcon: "img/icons/apple-touch-icon.png",
      maskIcon: "img/icons/safari-pinned-tab.svg",
      msTileImage: "img/icons/mstile-150x150.png",
    },
    themeColor: "#03a1fc",

    // configure the workbox plugin
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: "src/service-worker.js",
      exclude: [/_redirects/, /robots.txt/, /google/, /\.map$/],
    },

    name: "Walnut Hills Directions",
    manifestOptions: {
      short_name: "Walnut.Direct",
    },
  },
};
