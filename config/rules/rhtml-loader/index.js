let ejs = require('ejs');
const fs = require('fs')
const path = require('path')
const cwd = process.cwd()
module.exports = function (source) {
  source = source.replace(/\<\%=(.*?)\%\>/g, (value, src) => {
    let filePath = src.trim().split('?')[0]
    var content = ejsRender(path.resolve(cwd, './src/templates/', filePath.match(/templates\/(.*$)/)[1]), this.resourcePath);
    value = value.replace(src, content.toString())
    return content.toString();
  })
  return source;
};


function ejsRender(ejsPath, pagename) {
  let content = fs.readFileSync(ejsPath).toString();
  let obj = {
    pageName: path.parse(pagename).name
  }
  return ejs.render(content, obj, {
    delimiter: '%'
  })
}
