module.exports = function (source, file) {
  if (this.resourcePath.indexOf('/pages/m/') > -1||this.resourcePath.indexOf('m-common.less') > -1) {
    source = source.replace(/[\d\.]+px/gi, value => {
      let number = parseFloat(value.replace('px', '').trim() || 0);
      if (number > 1) {
        return `${parseFloat(parseFloat(number /2 / 3.75).toFixed(3))}vw`;
      } else {
        return value;
      }
    });
  }
  return source;
};
