const {privateMsg} = require("../botfunction/communication");

async function run(bot, sender, params) {
    bot.clearAll();
    privateMsg(bot, sender, "清除了所有自动命令");
}

const doc = [
    "clearAll",
    "    清除一切自动命令"
]

module.exports = {run,doc}