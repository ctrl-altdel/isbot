const {privateMsg,advancedMsg} = require("../botfunction/communication");
const logger = require('../botcore/logsystem');
const {ci_list} = require('../botfunction/cloudinventory');

async function run(bot, sender, params){
    if(params.length < 1){
        privateMsg(bot, sender, "ci : 必须指定子命令");
    }
    switch(params[0]){
        case "list":
            let text = [`${bot.name}的云仓列表------------------------`];
            (await ci_list(bot, (params[1] && params[1] == "all"))).forEach((item)=>{
                text.push(`<green>${item.name}</green>  ${item.count}  ${item.unlocked ? "已解锁" : "未解锁"}`)
            })
            advancedMsg(bot, sender, text);
            break;
        default:
            privateMsg(bot, sender, `ci : 不支持的子命令 : ${params[0]}`);
    }
}

module.exports = {run};