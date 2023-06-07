const {privateMsg} = require("../botfunction/communication");
const logger = require('../botcore/logsystem');

async function run(bot, sender, params){

    if(params.length == 0){
        cmd = `/is tp ${sender}`;
    }
    else if(params.length == 1){
        if(params[0][0] == '#'){
            // 解析为数字岛号
            cmd = `/visit ${params[0]}`;
        }
        else{
            // 解析为用户名
            cmd = `/is tp ${params[0]}`;
        }
    }
    else{
        cmd = `/visit ${params[0]} ${params[1]}`
    }

    bot.bot.chat(cmd);
    logger.log("Bot use command : " + cmd)
}

const doc=[
    "1. tp <#数字>",
    "    传送到该岛号的岛屿",
    " ",
    "2. tp [玩家]",
    "    玩家 : 缺省为自己，传送到目标玩家当前所在岛屿",
    " ",
    "3. tp <玩家> <数字>",
    "    传送到 <玩家> 的第 <数字> 个岛屿",
]

module.exports = {run,doc}
