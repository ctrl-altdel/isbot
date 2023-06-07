const {privateMsg} = require("../botfunction/communication");
const MCD = require("minecraft-data")("1.19.2");
const logger = require('../botcore/logsystem');

async function run(bot, sender, params) {
    if(params.length != 1){
        privateMsg(bot, sender, "leftHand : 必须且只能提供一个参数");
        return;
    }
    if(params[0] == "off"){
        bot.bot.unequip("off-hand").then(
            ()=>{privateMsg(bot, sender, "成功取下左手物品");},
            (reason)=>{
                privateMsg(bot, sender, "无法取下左手物品");
                logger.error(reason);
            }
        )
    }
    else{
        let id = MCD.itemsByName[params[0]].id;
        if(!id){
            privateMsg(bot, sender, `leftHand : 无效的minecraft物品 ${params[0]}`);
            return;
        }
        bot.bot.equip(id, "off-hand").then(
            ()=>{privateMsg(bot, sender, "成功在左手装备物品");},
            (reason)=>{
                privateMsg(bot, sender, "bot身上无法找到物品,或左手已占用");
                logger.error(reason);
            }
        )
    }
}

const doc = [
    "leftHand <物品名>|off",
    "   将指定的品放置到左手，或将该物品从左手取下"
]

module.exports = {run,doc}