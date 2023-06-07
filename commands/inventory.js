const {advancedMsg} = require("../botfunction/communication");
const MCD = require("minecraft-data")("1.19.2");

async function run(bot, sender, params) {
    let slots = bot.bot.inventory.slots;
    let hand_item = ["<yellow>======副手=========="];
    if(slots[45] == null){
        hand_item.push("无");
    }else{
        hand_item.push(`<green>${slots[45].name}</green> : ${slots[45].count}`);
    }
    let equippments = [
        "<yellow>======盔甲==========",
        `<yellow>头</yellow> : ${(slots[5]==null) ? "无" : slots[5].name}   `+
        `<yellow>胸</yellow> : ${(slots[5]==null) ? "无" : slots[5].name}   `,
        `<yellow>腿</yellow> : ${(slots[5]==null) ? "无" : slots[5].name}   `+
        `<yellow>靴</yellow> : ${(slots[5]==null) ? "无" : slots[5].name}`
    ];
    let backpack_data = [];
    let backpack_slot_cnt = 0;
    for (let i = 9; i < 45; i++) {
        if(slots[i] != null){
            backpack_slot_cnt++;
            if(backpack_data.includes(slots[i].name)){
                backpack_data[slots[i].name] += slots[i].count;
            }
            else{
                backpack_data[slots[i].name] = slots[i].count;
            }
        }
    }
    let backpack = [`<yellow>======背包(${backpack_slot_cnt}/36)===`];
    for(let name in backpack_data){
        backpack.push(`<green>${name}</green> : ${backpack_data[name]}    `);
    }
    let msg = [`<yellow>${bot.name}的物品=========================`];
    advancedMsg(bot, sender, msg.concat(hand_item, equippments, backpack));
}

const doc = [
    "inventory",
    "   显示Bot身上持有和装备的物品"
]

module.exports = {run,doc}
