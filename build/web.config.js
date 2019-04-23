let isDev = process.env.NODE_ENV == "development";

module.exports = {
  publicPath: isDev ? "/" : "http://pqe613cu1.bkt.clouddn.com/wlasd/",
  port: 3000
};
