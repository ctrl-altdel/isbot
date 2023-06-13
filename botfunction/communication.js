const logger = require('../botcore/logsystem');
const {sleep} = require('../botcore/threadsleep');

async function privateMsg(bot, tgt_user, content){
    if (content && content.length) {
        logger.log(`${bot.name} tell ${tgt_user} : ${content}`);
        if(tgt_user != "web_control"){
            await bot.bot.chat(`/tell ${tgt_user} ${content}`);
        }
    }
}

async function advancedMsg(bot, tgt_user, contents){
    if(tgt_user == "web_control") return;
    bot.bot.chat(`/telltransaction${tgt_user}`);
    let i = 0;
    for (let i = 0; i < contents.length; i++) {
        privateMsg(bot, tgt_user, contents[i].concat("<reset>"));
        await sleep(50);
    }
    bot.bot.chat(`/tellcommit${tgt_user}`);
}

module.exports = {privateMsg, advancedMsg}