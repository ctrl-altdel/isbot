const pf = require('mineflayer-pathfinder');
const {privateMsg} = require('../botfunction/communication');
const MCD = require('minecraft-data')("1.19.2");
const { GoalNear } = require('mineflayer-pathfinder').goals

let first = true;
let movement;

function initialize(bot){
    movement = new pf.Movements(bot.bot, MCD);
    movement.allowFreeMotion = true;
    movement.allow1by1towers = false;
    movement.canDig = false;
}

async function run(bot, sender, params){
    bot.bot.loadPlugin(pf.pathfinder);
    if(first){
        initialize(bot);
        first = false;
    }
    let player = params[0] ?? sender;
    let target = bot.bot.players[player]?.entity?.position;
    if(! target){
        privateMsg(bot, sender, `机器人无法识别 ${player} 的位置`);
        return;
    }
    privateMsg(bot, sender, `机器人开始运动至 ${player}`);
    bot.bot.pathfinder.setMovements(movement);
    await bot.bot.pathfinder.goto(new GoalNear(target.x, target.y, target.z, 1)).then(
        ()=>{privateMsg(bot, sender, "运动成功完成")},
        (err)=>{privateMsg(bot,sender,"follow : " + err)}
    )
}

const doc = [
    "follow [player]",
    "机器人尝试步行到玩家在发送指令时刻所在的位置",
    "player : 目标玩家，缺省值为发送者"
]


module.exports = {run, doc};