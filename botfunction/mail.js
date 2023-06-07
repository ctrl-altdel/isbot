const logger = require('../botcore/logsystem');

const mailbox_title = "{\"text\":\"邮件列表\"}";
const mail_title_prifix = "{\"text\":\"放入送给";

async function send_mail(bot, tgt_user, items ,message=undefined){
    if (message == undefined){
        message = "来自bot的自动邮寄";
    }
    bot.bot.once("windowOpen",async (window)=>{
        if(!window.title.startsWith(mail_title_prifix)){
            return;
        }
        window.requiresConfirmation = false;
        for(let id in items){
            await window.deposit(Number(id), null, items[id])
        }
        window.close();
        logger.log(`Sent a mail to ${tgt_user} with message \"${message}\"`);
    })
    bot.bot.chat(`/mail ${tgt_user} ${message}`);
}



module.exports = {send_mail}