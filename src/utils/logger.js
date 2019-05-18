"use strict";
const log4js = require("log4js");
const loggerConfig = require("config").loggerSetting;

let configure = function (logDir) {
  log4js.configure({
    appenders: [
      {
        type: 'console',
        category: "console"
      },
      {//日期文件格式
        type: "dateFile",
        filename: `${logDir}/log.log`,
        pattern: "_yyyy-MM-dd",
        alwaysIncludePattern: true
      }
    ],
    replaceConsole: true
  });
};

/**
 * 日志操作类
 */
class LoggerHelper {
  constructor(logDir, level) {
    this.logDir = logDir;
    this.level = level || "INFO";
    configure(this.logDir);
  }

  getLogger(name) {
    name = name || "dateFileLog";
    let logger = log4js.getLogger(name);
    logger.setLevel(this.level);
    return logger;
  }
}

module.exports = new LoggerHelper(loggerConfig.dir, loggerConfig.level);