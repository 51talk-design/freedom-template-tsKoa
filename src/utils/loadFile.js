const path = require('path');
const load = (pathName, fileName) => {
  if (fileName) {
    return require(path.join(pathName, fileName));
  }
  return require(pathName);
};
module.exports = {
  load
};