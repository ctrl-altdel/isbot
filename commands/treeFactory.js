const {privateMsg} = require("../botfunction/communication");
const MCD = require("minecraft-data")("1.19.2");
const {send_mail} = require('../botfunction/mail');

 //放置方块
async function run(bot, sender, params) {
    let mail_target = bot.name;
    await bot.bot.waitForChunksToLoad();
    switch (params.length) {
        case 2:
            mail_target = params[1];
        case 1:
            if(!saplings.includes(params[0])){
                privateMsg(bot, sender, `treeFactory : ${params[0]}不是可用树苗`);
                return;
            }
            break;
        default:
            privateMsg(bot, sender, "treeFactory : 参数数量错误");
            return;
    }
    let blocks = bot.bot.findBlocks({
        matching: (block) => dirt_like.includes(block.name),
        maxDistance: 4,
        count: 1
    });

    if(blocks.length == 0){
        privateMsg(bot, sender, `treeFactory : 机器人附近不存在可种植树苗的方块 : ${dirt_like}`);
        return;
    }
    privateMsg(bot, sender, "机器人选择了最近的可种植方块");
    let above = bot.bot.blockAt(blocks[0].offset(0,1,0));
    if(!above || above.name != "air"){
        privateMsg(bot, sender, "treeFactory : 目标方块上方不是空气，无法种植");
        return;
    }
    let place_target = bot.bot.blockAt(blocks[0]);

    let item_id = MCD.itemsByName[params[0]].id;
    let cnt = 0;

    let work = async()=>{
        if(bot.bot.blockAt(blocks[0].offset(0,1,0)).name != "air") return;
        const items = bot.bot.inventory.slots;
        let tree_items = [];
        let sum = 0;
        items.forEach(slot => {
            if(slot!=null && (slot.type == item_id || byproducts.includes(slot.name))){
                if(slot.type in tree_items){
                    tree_items[slot.type] += slot.count;
                }
                else{
                    tree_items[slot.type] = slot.count;
                }
                sum += slot.count;
            }
        });

        if(! (item_id in tree_items)){
            privateMsg(bot, sender, `treeFactory : 机器人身上没有${params[0]}，无法种植`);
            return;
        }
        if(tree_items[item_id] < 64) tree_items[item_id] = 0;
        else tree_items[item_id] -= 64;
        if(sum > 576 && ((cnt++) % 50 == 0)){
            await send_mail(bot, mail_target, tree_items, "Bot的树场副产品");
        }
        await bot.bot.equip(item_id, 'hand');
        await bot.bot.activateBlock(place_target);
    }

    bot.clearAll();
    bot.bot.MyTasks.addTask("treeFactory", work, 100);
}

const saplings = ["oak_sapling", "spruce_sapling", "birch_sapling", "jungle_sapling", "acacia_sapling", "dark_oak_sapling", "cherry_sapling"];

const dirt_like = ["dirt", "rooted_dirt", "grass", "podzol", "mycelium", "farmland"];

const byproducts = ["stick", "apple"];

const doc = [
    "treeFactory <树苗类型> [发送对象]",
    "   树苗类型 : 欲种植的树木类型",
    "   发送对象 : 树场副产品和多余树苗将发送到该对象邮箱，默认bot自己",
    "<gray>放置目标方块的上表面应当为空气</gray>"
]

module.exports = {run,doc};