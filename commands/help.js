const {privateMsg,advancedMsg} = require("../botfunction/communication");

async function run(bot, sender, params){
    let cmd = "help";
    if(params.length == 0 || params[0] == "help"){
        if(help_menu == undefined) build_help_menu(bot);
        advancedMsg(bot, sender, help_menu);
        return;
    }
    let doc = bot.commands[params[0]];
    if(doc == undefined){
        privateMsg(bot, sender, `指令${cmd}不存在， 或该指令不存在文档`);
        return;
    }
    doc = doc.doc;
    let tmp = [
        `<green>指令：${cmd}</green>`,
        "<green>========================================================</green>"
    ];
    tmp = tmp.concat(doc);
    tmp.push("<green>========================================================</green>");
    await advancedMsg(bot, sender, tmp);
    delete tmp;
}

let help_menu = undefined;

function build_help_menu(bot){
    help_menu = [
        "<green>机器人命令帮助列表</green>",
        "<green>========================================================</green>"
    ]
    for(let command in bot.commands){
        let item;
        if("doc" in bot.commands[command]){
            item = `<click:suggest_command:'/tell ${bot.name} help ${command}'><yellow>${command}`
        }
        else{
            item = command;
        }
        help_menu.push(item);
    }
    help_menu.push(
        "<green>========================================================</green>",
        "(点击黄色指令可获取详细帮助)"
    )
}

module.exports = {run}