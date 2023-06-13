const {items} = require('../translation/items');
const {blocks} = require('../translation/blocks');
const {privateMsg} = require('../botfunction/communication');
const {is_Chinese} = require('../botcore/util');
const MCD = require('minecraft-data')("1.19.2");

const wiki_addr = "https://minecraft.fandom.com/zh/wiki/";

async function run(bot, sender, params){
    if(params.length != 1){
        privateMsg(bot, sender, "wiki : 仅支持一个物品或方块作为查询词");
        return;
    }
    let name = params[0];
    let say = (name)=>bot.bot.chat(`${name} 的wiki : ${wiki_addr}${encodeURI(name)}`)

    if(is_Chinese(name)){
        if(!(items.has(name)) && (!blocks.has(name)) ){
            privateMsg(bot, sender, `wiki : 不存在中文物品或方块名 ${name}`);
            return;
        }
        say(name);
    }
    else{
        for (const pair of items) {
            if(pair[1] == name){
                say(pair[0]);
                return;
            }
        }
        for (const pair of blocks) {
            if(pair[1] == name){
                say(pair[0]);
                return;
            }
        }
        privateMsg(bot, sender, `wiki : 不存在英文物品或方块名 ${name}`);
    }
    
}

const doc = [
    "toss <名称>",
    "名称 : 中文或英文的物品、方块名",
    "将在<red>公屏</red>返回 中文 minecraft wiki 的相关资料页链接"
]

module.exports = {run, doc}


