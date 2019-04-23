/**
 * 主模块文件
 */

let fs = require('fs');
let path = require('path');
let qn = require('qn')
let qnOptions = {
  accessKey: 'tx66RE8aemRKNcvzhKtxE2w0JVAvN3PO20v-iVtf',
  secretKey: 'Ta56T3xGA6hI20vVtOxWgbP33W09b5QQ49H1dMiz',
  bucket: 'static',
  origin: 'http://pqe613cu1.bkt.clouddn.com',
  uploadURL: 'http://up.qiniu.com/',
  prefix: 'assets/'
};

let qnConfig = qn.create(qnOptions);

let config = function (options = {}) {
  qnConfig = qn.create(Object.assign(qnOptions, options));
};

let upload = function (stats = {}, cb = () => {}) {
  if (!stats.compilation || !stats.compilation.assets) {
    throw new Error('parameter error!');
  }
  let uploadFileIndex = 0;
  let assets = stats.compilation.assets || {};
  let assetsKeys = Object.keys(assets);
  // 递归上传文件
  let qnUploadFile = function (cb) {
    if (uploadFileIndex >= assetsKeys.length) {
      cb();
      return false;
    }
    let src = assetsKeys[uploadFileIndex];
    if (!/.html$/.test(src)) {
      let existsAt = assets[src].existsAt;
      let content = fs.readFileSync(path.resolve(__dirname, existsAt));
      let key = path.join(qnOptions.prefix, src);

      qnConfig.upload(content, {
        key
      }, function (err) {
        console.log('qncdn:', key);
        console.log(err)
        if (err && err.message.indexOf('file exists') == -1) {
          throw new Error(err);
        }
        uploadFileIndex++;
        qnUploadFile(cb);
      });
    } else {
      uploadFileIndex++;
      qnUploadFile(cb);
    }
  };
  qnUploadFile(cb);
};

module.exports = {
  config,
  upload
};
