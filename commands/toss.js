const {privateMsg} = require("../botfunction/communication");
const {itemsByName} = require("../botcore/util");

async function run(bot, sender, params){
    if(params.length == 0){
        privateMsg(bot, sender, "toss : 主参数不得为空");
        return;
    }
    let items = bot.bot.inventory.slots;
    // [5-8]:equippments [9-35]: package [36-44]: hotbar [45]：lefthand
    let start,end;
    switch (params[0]) {
        case "item":
            if(params.length < 2){
                privateMsg(bot, sender, "toss item : 未指定任何物品");
                return;
            }
            let targets = Array()
            for (let i = 1; i < params.length; i++) {
                let item = ItemsByName(params[i]);
                if(item == undefined){
                    privateMsg(bot, sender, "toss item : 忽略不存在的 minecraft item : " + params[i]);
                }
                else{
                    targets.push(item.id);
                }
                
            }
            if(targets.length == 0){
                return;
            }
            for(const item of items){
                if(item == null) continue;
                const id = item.type;
                for(const tid of targets){
                    if(id == tid){
                        await bot.bot.tossStack(item);
                        break;
                    }
                }
            }
            return;
        case "package":
            start = 9;
            end = 36;
            break;
        case "hotbar":
            start = 36;
            end = 46;
            break;
        case "equipped":
            start = 5;
            end = 9;
            break;
        case "inventory":
            start = 9;
            end = 46;
            break;
        case "all":
            start = 0;
            end = 46;
        default:
            privateMsg(bot, sender, "toss : 主参数只能为 : item all package hotbar equipped inventory")
            return;
    }
    for (let i = start; i < end; i++) {
        if(items[i] != null){
            await bot.bot.tossStack(items[i]);
        }
    }
}

const doc=[
    "toss <主参数> [...参数列表]",
    "    主参数 : Enum[item|all|package|hotbar|equipped|inventory]",
    "            item : 匹配参数列表中的所有物品",
    "            all : 所有物品",
    "            package : 背包栏所有物品",
    "            hotbar : 快捷栏和副手物品",
    "            equipped : 装备栏物品",
    "            inventory : package + hotbar",
    "    参数列表: 仅当主参数为item时有用，将丢出所有匹配参数列表给出名称的物品"
]


module.exports = {run,doc};