const {privateMsg} = require("../botfunction/communication");
const MyStrUtil = require("../util/StrUtil");
const MCD = require("minecraft-data")("1.19.2");

 //放置方块
async function run(bot, sender, params) {
    await bot.bot.waitForChunksToLoad();
    if(params.length != 2){
        privateMsg(bot, sender, "必须正确指定放置物品和目标方块的名称");
        return;
    }

    let place_item = MCD.itemsByName[params[0].toLowerCase()];
    let target = MCD.blocksByName[params[1].toLowerCase()];

    if(MyStrUtil.isNull(place_item)){
        privateMsg(bot, sender, `无效的 minecraft item : ${params[0]}`);
        return;
    }
    if(MyStrUtil.isNull(target)){
        privateMsg(bot, sender, `无效的 minecraft block : ${params[1]}`);
        return;
    }

    let blocks = bot.bot.findBlocks({
        matching: (block) => block.name === target.name,
        maxDistance: 4,
        count: 6
    });
    if(blocks.length == 0){
        privateMsg(bot, sender, `机器人附近不存在block : ${target.name}`);
        return;
    }
    else{
        privateMsg(bot, sender, `机器人附近共找到${blocks.length}个目标方块`);
    }

    bot.clearAll();
    const fun = async () => {
        const placeItemOBJ = bot.bot.inventory.items().find(item => item.name == place_item.name);
        if (!placeItemOBJ) {
            privateMsg(bot, sender,  `机器人未持有 item : ${place_item.name}`);
            bot.clearAll();
            return;
        }
        await bot.bot.equip(placeItemOBJ, 'hand');
        for (let block of blocks) {
            let above = bot.bot.blockAt(block.offset(0, 1, 0))
            if (above) {
                if (above.name === 'air') {
                    if (block) {
                        await bot.bot.activateBlock(bot.bot.blockAt(block))
                    }
                }
            }
        }
    }

    bot.bot.MyTasks.addTask("placeBlock", fun, 100);
}

const doc = [
    "placeBlock <item> <block>",
    "    item : 欲放置的物品",
    "    block : 放置的目标方块类型",
    "<gray>放置目标方块的上表面应当为空气</gray>"
]

module.exports = {run,doc};