let isDev = process.env.NODE_ENV == "development";

module.exports = {
  publicPath: isDev ? "/" : "https://s0.babyfs.cn/websitev2/",
  port: 3000
};
