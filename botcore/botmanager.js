const Thread = require('worker_threads');
const {IsBot} = require('./IsBot');
const logger = require('./logsystem');

class BotNode{
    username;
    account;
    status;
    botThread;
    constructor(obj){
        this.username = obj.username;
        this.account = obj.account;
        this.status = -1;
        this.botThread = null;
    }       
} 

class BotManager{
    botList;
    server;

    constructor(accounts, server){
        this.server = server;
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
        let thread = new Thread.Worker(__filename, {workerData : {...this.server, ...this.botList[username]}});
        thread.on("message",(msg)=>{
            switch (msg[0]) {
                case "online":
                    this.botList[msg[1]].status = 1;
                    break;
                case "offline":
                    this.botList[msg[1]].status = -1;
                case "terminate":
                    this.botList[msg[1]].botThread = null;
                break;
            }
        })
        this.botList[username].botThread = thread;
    }

    logout(username){
        if(!username in this.botList){
            logger.warn("Logout : Unknown username");
            return;
        }
        if(this.botList[username].status != 1){
            logger.warn(`Logout : ${username} is not online yet`);
            return;
        }
        this.botList[username].status = 0;
        logger.log(`Thread ${this.botList[username].botThread.threadId} terminated, "${username}\" logout`);
        this.botList[username].botThread.terminate().then(()=>{this.botList[username].status = -1;})
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
        this.botList[username].botThread.postMessage([sender,command]);
    }
}

if(!Thread.isMainThread){
    logger.log(`Thread ${Thread.threadId} starts, serving for \"${Thread.workerData.username}\"`);
    let isbot = new IsBot(Thread.workerData);
    isbot.bot.on("end",()=>{Thread.parentPort.postMessage(["offline", isbot.name])});
    Thread.parentPort.on("message",(message)=>{isbot.on_command_heard(message[0], message[1])});

    process.on("uncaughtException",(err,origin)=>{logger.error(`Unkaught Error at Thread ${Thread.threadId} (working for ${Thread.workerData.username}) :${err}`)})
}




module.exports = {BotManager}