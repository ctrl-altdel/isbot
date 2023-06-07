const { privateMsg } = require("../botfunction/communication");
const { send_mail } = require("../botfunction/mail");
const MCD = require("minecraft-data")("1.19.2");

async function run(bot, sender, params) {
    let anomous = false;
    if (params.length < 4) {
        privateMsg(bot, sender, "mail : 必须输入四个参数");
        return;
    }
    let item = MCD.blocksByName[params[1].toLowerCase()];
    if(item == undefined){
        privateMsg(bot, sender, `mail : 无效的minecraft物品 ${params[1]}`);
        return;
    }
    let count = parseInt(params[3],10);
    if(count == NaN){
        privateMsg(bot, sender, `mail : 输入非数值 ${params[3]}`);
        return;
    }
    let maxcount = 0;
    bot.bot.inventory.items().forEach(slot => {
        if(slot.name == item.name){
            maxcount +=slot.count;
        }
    });
    switch (params[2]) {
        case "at":
            if(maxcount < count){
                privateMsg(bot, sender, `需要${count}个${item.name}，但只有${maxcount}个`);
                return;
            }
            break;
        case "less":
            if(maxcount < count) count = maxcount;
            break;
        case "all":
            count = maxcount;
            break;
        default:
            privateMsg(bot, sender, `mail : 修饰词不能为${params[2]}`);
            return;
    }
    let message;
    if(params.length ==5 && params[5] == "anomous"){
        message = "机器人发送给您物资";
    }
    else{
        message = `机器人受${sender}之托发送给您物资`;
    }
    let tmp = [];
    tmp[item.id] = count;
    await send_mail(bot, params[0], tmp, message);
    privateMsg(bot, sender, `将${count}个${item.name}发送给了${params[0]}`);
}

const doc = [
    "mail <目标> <物品> <修饰词> <数目> [匿名]",
    "   将 <数目> 个 <物品> 发送给 <目标>",
    "   修饰词 : Enum [at| all| less]",
    "       at : 发送准确数量的物品，若不足则报错",
    "       all : 发送全部该种物品，数目被忽略",
    "       less : 尝试以\"at\"发送，在物品不足时以\"all\"",
    "   匿名 : 注明 anomous 可以在邮件题目中隐藏指令发送者",
    "<red>确保目标存在，否则将在无报错的情况下取消发送"
];

module.exports = {run,doc};