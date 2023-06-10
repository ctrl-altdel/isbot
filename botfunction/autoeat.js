const autoEat = require("mineflayer-auto-eat");
/**
 *
 * @param bot 机器人
 * @param options 参数选项
 *
 * {
 *     disable: true 开启自动进食 false 关闭
 *    useOffhand
 * }
 */
function settingsAutoEat(bot) {

    bot.loadPlugin(autoEat.plugin);
    bot.autoEat.options={
        priority: 'foodPoints',
        startAt:18,
        bannedFood: ['golden_apple', 'enchanted_golden_apple','pufferfish', 'spider_eye', 'poisonous_potato', 'rotten_flesh'],
        //entity 捡起东西时，判断是否可食用
        checkOnItemPickup:true,
        //副手进食 true使用副手
        useOffhand:true,
    };
}

module.exports={settingsAutoEat}
