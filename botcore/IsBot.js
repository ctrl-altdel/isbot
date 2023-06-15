const mineflayer = require('mineflayer');
const {settingsAutoEat} = require('../botfunction/autoeat');
const {Tasks} = require("./Tasks");
const {loadCommands, reloadCommands} = require("../botfunction/loadcommand")
const {privateMsg} = require("../botfunction/communication")
const logger = require('./logsystem');
const Thread = require('worker_threads');




class IsBot {
    
    bot;
    options;
    name;
    commands;

    constructor(options) {
        this.name = options.username;
        this.options = options;
        this.initialize();
    }

    initialize(){
        logger.log(`\"${this.name}\" trying to login at ${this.options.host}`);
        this.bot = mineflayer.createBot(JSON.parse(JSON.stringify(this.options)));
        this.bot.once("spawn",()=>{
            Thread.parentPort.postMessage(["online", this.name]);
            logger.log(`\"${this.name}\" is online now.`);
        })

        settingsAutoEat(this.bot);
        this.bot.MyTasks = new Tasks(this.options.account);
        loadCommands(this);
        this.bindEvent();
    }

    clearAll() {
        this.bot.MyTasks.clearAllTask();
        this.bot.chat("/assist autocraft clear");
        // this.bot.pathfinder.setGoal(null, false);
        this.bot.stopDigging();
        this.bot.clearControlStates();
    }


    bindEvent() {
        this.bot.on('end',  (reason) => {
            this.bot.MyTasks.clearAllTask();
            this.bot.removeAllListeners();
            if(reason == "User Shutdown") return;
            logger.warn(`${this.name} unexpected down at ${new Date().toLocaleString("zh-CN")}, trying to reconnect ...`);
            setTimeout( () => this.initialize(), 5000);
        })

        this.bot.on('health', () => {
            if (this.bot.food === 20) {
                this.bot.autoEat.disable()
            } else {
                this.bot.autoEat.enable()
            }
        })
        
        this.bot.on("message", async (jsonMsg) => {
            if(jsonMsg?.text?.startsWith("§7")){
                let sender = jsonMsg.text.split(" §7-> ")[0].slice(2);
                if(sender == this.name) return;
                if (!this.options.master.includes(sender)){
                    privateMsg(this, sender, "您不具有BOT权限");
                    return;
                }
                this.on_command_heard(sender, jsonMsg.extra[0].text);
            }
        }
    )
    }

    on_command_heard(sender, message){
        let params = message.split(/\s+/);
        let cmd = params.shift();
        if(cmd == "reloadCommands"){
            reloadCommands(this, sender);
            return;
        }
        try {
            this.commands[cmd].run(this, sender, params);
        } catch (e) {
            logger.warn(`Undefiened command from ${sender} : ${cmd}`);
            privateMsg(this, sender, "未定义的指令： " + cmd);
        }
    }

}

module.exports = {IsBot}

