const {readFileSync, readdirSync, mkdirSync} = require('fs');
const {BotServer} = require('../www/server');
const logger = require('./logsystem');


logger.log("\"Is Bot\" minecraft机器人系统启动 版本号0.1.0");

let accounts = JSON.parse(readFileSync("./config/accounts.json","utf8"));
let minecraft_server = JSON.parse(readFileSync("./config/server.json","utf8"));
let web_conf = JSON.parse(readFileSync("./config/program.json","utf8"));

logger.log("Configuration files exist.");

process.on("uncaughtException",(err,origin)=>{logger.error("Uncaught Error at main thread:" + err + " : " + origin)})

let botServer = new BotServer(accounts, minecraft_server, web_conf);
