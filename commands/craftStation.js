const { privateMsg, advancedMsg } = require("../botfunction/communication");
const { Vec3 } = require('vec3');

class StationPosition {
    init_time;
    material_container;
    product_container;

    constructor() {
        this.init_time = new Date.now();
        this.material_container = new Array();
        this.product_container = new Array();
    }
}

const container_blocks = ["chest", "shulker_box", "hopper"];

let position_cache = null;

async function run(bot, sender, params) {
    if (!params[0]) {
        privateMsg(bot, sender, "craftStation : 必须提供子参数");
        return;
    }
    let main_param = params.shift();
    switch (main_param) {
        case "scan":
            await scan(bot, sender, params);
            break;
        case "cache":
            await cache(bot, sender, params);
            break;
        default:
            privateMsg(`craftStation : 无效的子参数 : ${main_param}`);
            return;
    }
}

async function scan(bot, sender, params) {
    let containers = bot.bot.findBlocks({
        "matching": (block) => {
            return block.name in container_blocks;
        },
        "count": 32
    })
    let text = [`<yellow>${bot.name}扫描到的周边容器======================`];
    containers.forEach((block_pos) => {
        let block = bot.bot.blockAt(block_pos);
        if (block) {
            text.push(`<click:suggest_command:'/tell ${bot.name} craftStation cache add [src|dst] ${block_pos.x} ${block_pos.y} ${block_pos.z}'><green>${block.name}</green></click> <${block_pos.x} ${block_pos.y} ${block_pos.z}>`);
        }
    });
    text.push("<yellow>点击绿色名称以添加===============================");
    await advancedMsg(bot, sender, text);
}


async function cache(bot, sender, params) {
    if (!params[0]) {
        privateMsg(bot, sender, "craftStation.cache : 必须提供子参数");
        return;
    }
    let main_param = params.shift();
    switch (main_param) {
        case "add":
            if (params.length != 4) {
                privateMsg('craftStation.cache.add : 其后必须为四个参数');
                return;
            }
            let coor;
            try {
                let x = parseInt(params[1]);
                let y = parseInt(params[2]);
                let z = parseInt(params[3]);
                coor = new Vec3(x, y, z);
            }
            catch {
                privateMsg(`craftStation.cache.add : 无法将${params[1]},${params[2]},${params[3]}识别为一个方块坐标`);
                return;
            }
            switch (params[0]) {
                case "src":
                    if (position_cache == null) position_cache = new StationPosition();
                    position_cache.material_container.push(coor);
                    break;
                case "dst":
                    if (position_cache == null) position_cache = new StationPosition();
                    position_cache.product_container.push(coor);
                    break;
                default:
                    privateMsg('craftStation.cache.add : 子参数必须为 src(原料) 或 dst(产物)');
                    return;
            }
        case "reset":
            position_cache = null;
            privateMsg('craftStation.cache.reset : 成功重置位置缓存');
            break;
        case "list":
            if (position_cache == null) {
                privateMsg('craftStation.cache.list : 缓存不存在');
                return;
            }
            let text = [
                `<yellow>${new Date(position_cache.init_time).toLocaleTimeString("zh-CN")} 创建的缓存=============================`,
                "<yellow>原料容器-----------------"
            ];
            position_cache.material_container.forEach((item) => {
                text.push(item.toString())
            })
            text.push("<yellow>产物容器-----------------");
            position_cache.product_container.forEach((item) => {
                text.push(item.toString())
            })
            text.push("<yellow>=============================================");
            await advancedMsg(bot, sender, text);
            break;
        default:
            privateMsg(`craftStation.cache : 无效的子参数 : ${main_param}`);
            return;
    }
}

module.exports = {run};