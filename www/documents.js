const {readdirSync, readFileSync} = require("fs");
const logger = require('../botcore/logsystem');

function generate_document(){
    let data = {};
    let files = readdirSync("./commands")
    for(let file of files){
        if(file.endsWith(".js")){
            let name = file.slice(0,-3);
            let cmd_module = require("../commands/"+ file);
            if("doc" in cmd_module){
                data[name] = cmd_module.doc;
            }
            else{
                data[name] = ["此指令暂无帮助"];
            }
        }
    }
    return data;
}

function parse_markdown(){
    let mdi = require('markdown-it')("default").enable("linkify");
    let md_file;
    try{
        md_file = readFileSync("./ReadMe.md","utf8");
    }
    catch(err){
        logger.error("Help Document : Parse markdown : "+err);
        return null;
    }
    
    let html = mdi.render(md_file);
    return html;
}


module.exports = {generate_document, parse_markdown}