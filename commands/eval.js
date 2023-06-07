const {privateMsg} = require("../botfunction/communication");
const MyStrUtil = require("../util/StrUtil");


async function run(bot, sender, params) {
    if (MyStrUtil.isEmpty(params)) {
        privateMsg(bot, sender, "不能执行空的指令");
        return;
    }
    let msg = params.join(' ');
    if(msg[0]!='/'){
        msg = '/' + msg;
    }
    bot.bot.chat(msg);
}

const doc = [
    "eval <指令>",
    "    指令 : 希望执行的指令，可自动补全斜杠"
]

module.exports = {run,doc}
