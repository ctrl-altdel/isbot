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
    let player_name = params[0] ?? sender;
    let player = bot.bot.players[player_name];
    if(player == undefined){
        privateMsg(bot, sender, `玩家 ${player_name} 不在线`);
        return;
    }
    if(player.entity == undefined){
        if(params[1] == "global"){
            bot.bot.chat(`/is tp ${player_name}`);
            player = bot.bot.players[player_name];
            if(player?.entity == undefined){
                privateMsg(bot, sender, `已经移动到 ${player_name} 所在岛屿，但该玩家不在出生点附近`);
                return;
            }
        }
        else{
            privateMsg(bot, sender, `玩家 ${player_name} 不在附近`);
            return;
        }
    }
    let target = player?.entity?.position;
    if(target == undefined) return;
    privateMsg(bot, sender, `机器人开始运动至 ${player_name}`);
    bot.bot.pathfinder.setMovements(movement);
    await bot.bot.pathfinder.goto(new GoalNear(target.x, target.y, target.z, 1)).then(
        ()=>{privateMsg(bot, sender, "运动成功完成")},
        (err)=>{privateMsg(bot,sender,"follow : " + err)}
    )
}

const doc = [
    "follow [player] [global]",
    "机器人尝试移动到玩家在发送指令时刻所在的位置",
    "player : 目标玩家，缺省值为发送者",
    "global : 输入此参数后，若目标在其他岛屿，机器人将尝试移动到该岛屿"
]


module.exports = {run, doc};