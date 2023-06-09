const {appendFile} = require('fs/promises');
const {readFileSync, readdirSync} = require('fs');

const filename = "./logs/log.csv";
if(! readdirSync("./").includes("logs")) mkdirSync("./logs");

async function writef(level, content){
    let time = new Date().toLocaleString('zh-CN');
    return appendFile(filename, [level, time, content].join(",")+"\n");
}

async function log(msg){
    console.log("[INFO] "+ msg);
    writef("info",msg);
}

async function warn(msg){
    console.log("[WARN] "+ msg);
    writef("warn",msg);
}

async function error(msg){
    console.error("[ERROR] "+ msg);
    writef("error",msg);
}

function get_log(){
    try{
        return readFileSync(filename, "utf8");
    }
    catch{
        return "";
    }
}


module.exports = {log, warn, error, get_log};

