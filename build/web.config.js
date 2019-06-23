let isDev = process.env.NODE_ENV == "development";

module.exports = {
  publicPath: isDev ? "/" : "http://ptja20a7f.bkt.clouddn.com/wlasd/",
  port: 3000
};
