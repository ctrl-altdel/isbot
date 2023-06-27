const { privateMsg } = require("../botfunction/communication")

async function run(bot, sender, params){
    if(params[0] == "recipe"){
        await show_recipes(bot, sender);
        return;
    }
    let recipe = recipes[params[0] ?? ""];
    if(recipe == undefined){
        privateMsg(bot, sender, `ciCraft : ${params[0] ?? ""} 不是可用的合成路径名称`);
        return; 
    }
}

async function show_recipes(bot, sender){

} 

const doc = [
    "1. ciCraft <recipe> <src> <dst>",
    "    recipe : 合成路径",
    "    src, dst : 原料和产物的来源或去向，可选 ci(云仓) 或 box(潜影盒)",
    "2. ciCraft recipe",
    "    显示所有可用的合成路径"
]

const recipes = {
    "quartz" : {}
}

module.exports = {run, doc}