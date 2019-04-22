var glob = require('glob')
var path = require('path')
var fs = require('fs')
var PAGES_DIR = path.resolve(__dirname, '../src/pages')
let configFile = './developer.config'

exports.entries = function () {
  let config=readConfig(configFile);
  var entryFiles = glob.sync(PAGES_DIR + '/**/*.js')
  var resultEntry = {}
  entryFiles.forEach(filePath => {
    var filename = filePath.match(/pages\/(.*?)\/[\w-]+.js/)[1]
    if (filter(filename,config)) {
      resultEntry[filename] = filePath
    }
  })
  return resultEntry
}

exports.htmlPages = function () {
  let config=readConfig(configFile);
  var entryHtmls = glob.sync(PAGES_DIR + '/**/*.html')
  var resultHtmlPages = []
  entryHtmls.forEach(filePath => {
    var filename = filePath.match(/pages\/(.*?)\/[\w-]+.html/)[1]
    if (!!filter(filename,config)) {
      var htmlPlugin = {
        template: filePath,
        filename: filename + '.html',
        chunks: filename,
        inject: true
      }
      resultHtmlPages.push(htmlPlugin)
    }
  });
  return resultHtmlPages
}

let filter = (filename,config=[]) => {
  let findItem = config.find(item => {
    return item.name === filename
  })
  if (!findItem) {
    fs.appendFileSync(configFile, `${filename}:1\n`);
    config.push({
      name: filename,
      status: 1
    })
    return true;
  } else {
    return parseInt(findItem.status);
  }
}

function readConfig(filename) {
  let config = [];
  if (!fs.existsSync(filename)) {
    fs.writeFileSync(filename, '')
  }
  let content = fs.readFileSync(filename).toString() || '';
  content.split(/\n/).forEach(item => {
    if (item.trim()) {
      config.push({
        name: item.split(':')[0],
        status: item.split(':')[1]
      })
    }
  })
  return config;
}
