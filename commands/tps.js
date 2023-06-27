const { BossBar } = require("mineflayer");

async function run(bot, sender, params){
    bot.bot.chat("/tpsbar");
    bot.bot.once("bossBarDeleted",()=>{bot.bot.chat("/tpsbar")})
    bot.bot.once("bossBarCreated",(bossBar)=>{

    })
}