const {privateMsg} = require("../botfunction/communication");
const {readdir} = require("fs");
const logger = require('../botcore/logsystem');

function loadCommands(bot){
    readdir("./commands",(err,files)=>{
        if(err){
            logger.error("Error in loading directory \"commands\": " + err);
            return 1;
        }
        bot.commands = new Array()
        files.forEach((file) => {
            if(file.endsWith(".js")){
                bot.commands[file.slice(0,-3)] = require("../commands/"+ file)
            }
        });
        return 0;
    })
}

function reloadCommands(bot, sendUser){
    for(key in bot.commands){
        try{
            let name = require.resolve("../commands/" + key);
            delete require.cache[name];
        }
        catch{
            logger.error(`Failed in unloading cache of command ${key}`)
        }
    }
    privateMsg(bot, sendUser, "成功卸载所有指令");
    if(loadCommands(bot)){
        privateMsg(bot, sendUser, "未能成功加载指令");
    }
    else privateMsg(bot, sendUser, "成功加载所有指令");
}

module.exports = {loadCommands, reloadCommands}