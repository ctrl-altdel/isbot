const mineflayer = require('mineflayer');
const {settingsAutoEat} = require('../util/AutoEatUtil');
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
        this.bot = mineflayer.createBot(this.options);
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
        this.bot.pathfinder.setGoal(null, false);
        this.bot.stopDigging();
        this.bot.clearControlStates();
    }


    bindEvent() {
        this.bot.on('end',  (reason) => {
            this.bot.MyTasks.clearAllTask();
            this.bot.removeAllListeners();
            logger.warn(`${this.name} unexpected down at ${new Date()}, trying to reconnect ...`);
            setTimeout( () => this.initialize(), 5000);
        })

        this.bot.on('health', () => {
            if (this.bot.food === 20) {
                this.bot.autoEat.disable()
            } else {
                this.bot.autoEat.enable()
            }
        })
        
        this.bot.on("chat", async (username,message,translate,jsonMsg) => {

            if(jsonMsg.json.text.length != 0 && username != this.name){
                if (!this.options.master.includes(username)){
                    privateMsg(this, sendUser, "您不具有BOT权限");
                    return;
                }
                this.on_command_heard(username, jsonMsg.extra[0].text);
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

