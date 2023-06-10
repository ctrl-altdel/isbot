const logger = require('../botcore/logsystem');
const {items} = require('../translation/items');
const {sleep} = require('../botcore/threadsleep');

async function ci_list(bot, free_included = false){
    let list = []
    const listen = (jsonMsg,position)=>{
        if("extra" in jsonMsg) return;
        let content = jsonMsg.json.text;
        if(content.startsWith("§8[§3岛屿助手§8] §7 - ")){
            console.log(content);
            let tmp = content.slice(18).split(' ');
            let unlocked = tmp[1] == "Premium";
            if(free_included || unlocked){
                let info = tmp[0].split("x");
                list.push({
                    "name":items.get(tmp[0]),
                    "count":parseInt(info[1]),
                    "unlocked":unlocked 
                })
            }
        }
    }
    bot.bot.chat("/ci textlist");
    logger.log(`${bot.name} use command: /ci textlist`)
    bot.bot.on("message",listen);
    await sleep(2000);
    bot.bot.off("message",listen);
    return list;
}



async function ci_get(bot, tgt_user, items ,message=undefined){
    if (message == undefined){
        message = "来自bot的自动邮寄";
    }
    bot.bot.once("windowOpen",async (window)=>{
        if(!window.title.startsWith(mail_title_prifix)){
            return;
        }
        window.requiresConfirmation = false;
        for(let id in items){
            await window.deposit(Number(id), null, items[id])
        }
        window.close();
        logger.log(`Sent a mail to ${tgt_user} with message \"${message}\"`);
    })
    bot.bot.chat(`/mail ${tgt_user} ${message}`);
}



module.exports = {ci_list}