const Thread = require('worker_threads');
const {IsBot} = require('./IsBot');
const logger = require('./logsystem');

class BotNode{
    username;
    account;
    status;
    botThread;
    master;
    constructor(obj){
        this.master = obj.master;
        this.username = obj.username;
        this.account = obj.account;
        this.status = -1;
        this.botThread = null;
    }       
} 

class BotManager{
    botList;
    server;
    static_conf;

    constructor(accounts, server, static_conf){
        this.server = server;
        this.static_conf = static_conf;
        this.botList = new Array();

        //use "username" as primary key
        accounts.forEach(account => {
            this.botList[account.username] = new BotNode(account);
        });
    }

    login(username){
        if(!username in this.botList){
            logger.error("Login : Unknown username");
            return;
        }
        if(this.botList[username].status != -1){
            logger.error(`Login : ${username} is already working`);
            return;
        }
        this.botList[username].status = 0;
        let thread = new Thread.Worker(__filename, {
            workerData : {
                botdata : {...this.server, ...this.botList[username], ...this.static_conf},
                logfilename : logger.logFileName,
            }
        });
        thread.on("message",(msg)=>{
            switch (msg[0]) {
                case "online":
                    this.botList[msg[1]].status = 1;
                    break;
                case "offline":
                    this.botList[msg[1]].status = -1;
                break;
            }
        })
        thread.on("exit",()=>{
            this.botList[username].status = -1; 
            this.botList[username].botThread = null;
        })
        this.botList[username].botThread = thread;
    }

    async logout(username){
        if(!username in this.botList){
            logger.warn("Logout : Unknown username");
            return;
        }
        if(this.botList[username].status != 1){
            logger.warn(`Logout : ${username} is not online yet`);
            return;
        }
        this.botList[username].status = 0;
        
        this.botList[username].botThread.postMessage({type:"terminate"})
    }

    pass_command(username, sender, command){
        if(!username in this.botList){
            logger.warn("Command : Unknown username");
            return;
        }
        if(this.botList[username].status != 1){
            logger.warn(`Command : ${username} is not online yet`);
            return;
        }
        this.botList[username].botThread.postMessage({type:"command", sender:sender, command:command});
    }
}

if(!Thread.isMainThread){
    logger.log(`Thread ${Thread.threadId} starts, serving for \"${Thread.workerData.botdata.username}\"`);
    let isbot = new IsBot(Thread.workerData.botdata);
    isbot.bot.on("end",()=>{Thread.parentPort.postMessage(["offline", isbot.name])});
    Thread.parentPort.on("message",(message)=>{
        switch (message?.type){
            case "command":
                isbot.on_command_heard(message.sender, message.command)
                break;
            case "terminate":
                logger.log(`Thread ${Thread.threadId} terminated, "${isbot.name}\" logout`);
                isbot.bot.quit("User Shutdown");
                process.exit();
        }
    });

    process.on("uncaughtException",(err,origin)=>{logger.error(`Unkaught Error at Thread ${Thread.threadId} (working for ${Thread.workerData.username}) :${err}`)})
}

module.exports = {BotManager}