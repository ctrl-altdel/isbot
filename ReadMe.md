# Is Bot minecraft机器人帮助文档

ver 0.1

## 概述

IsBot 是minecraft机器人运行平台，使用机器人登录您的账号，可以为您在游戏中挂机执行一些任务。 IsBot 为性能较低的服务器长时间挂机而设计, 您可以将该程序24小时挂载在您拥有的旧电脑、租赁的低性能服务器主机，甚至是使用低端二手配件组装的个人计算机上（本程序的开发者就是如此）。本程序的开发目的是将minecraft玩家从枯燥的重复性劳动中解放，帮助他们将有限的游戏时间用在更加有创造性的工作上，本程序不含有恶意作弊功能，但请注意，部分服务器不允许使用bot程序挂机。

理论上，本程序可以在任何 Microsoft 正版验证或离线验证的服务器中使用，但实际上开发者仅有能力在 [“梦幻之屿” 服务器](http://anya.world) 上进行开发和验证，因此其他服务器上或多或少可能存在bug。另外，开发者本人不是计算机相关专业，因此难以保证程序没有恶性bug，如果您对此有所建议请不吝赐教。但开发者无法替您承担本程序出现漏洞造成的生产机器或建筑的损失。

总之，感谢您使用IsBot，祝您游戏愉快。

## 程序的安装和启动

### 依赖

程序仅依赖nodejs环境，版本至少为v10，[安装包下载地址](https://nodejs.org/en)

安装方式可自行查找网上教程，请确定 node 和 npm 在您系统的环境变量中。

安装后，切换到isbot根目录（即本文件所在位置），运行下列指令，等待自动下载安装依赖包。本程序主要依赖 mineflayer 及其附属功能包。

```bash
npm install
```

### 启动

在isbot根目录运行以下指令即可启动程序

```bash
npm run
```

有时您可能希望使用批处理任务（windows）/ shell脚本（linux）启动本程序，此时您可以使用 node 运行 botcore/main.js，它是程序的主入口。

```bash
cd <isbot_root_path>
node ./botcore/main.js
# Windows 请将路径分隔符改为反斜杠
```
请注意，务必通过cd将程序启动路径设定为 <isbot_root_path>，程序内部含有使用相对路径的模块。

### 网页客户端

考虑到很多情况下我们需要使用其他计算机控制 bot，本程序具有网页客户端。请注意客户端并不考虑恶意侵入，因此使用大量 GET 请求传输指令，客户端页面本身也不要求登录验证，这意味着您需要自行保护局域网内的安全

局域网客户端默认端口为 3001 可通过修改配置文件进行更换。

## 程序结构
botcore 和 botfunction 为 isbot 的核心部分，不要修改

程序的所有配置文件存储在 config 文件夹下，初次使用时，将 templetes 子目录下的所有文件复制到config 中，并安装你的实际情况修改，**一切修改将在完全重启程序后生效**。

如果您是梦幻之屿玩家，您可以直接使用 templetes 中的 server.json 。否则，根据您的服务器进行配置

www 为 isbot 的控制服务器，其开放端口在 config/program.json 中设置

commands 为机器人指令目录，内含部分预设指令，您可以相对自由地修改预设指令和添加自己的指令，通常某个指令的错误不会造成整个程序崩溃，相关内容请参考 [指令](#指令) 章节

## 指令

isbot 的指令由唯一的指令码和若干参数组成，bot会自动根据空格切分元素，因此任何指令码和参数都不得包含空格。

调用指令可以在游戏中使用 /tell <机器人名字> <指令码> <参数...> 来执行，**只有具有master权限的用户可执行指令**

此外，也可使用网页客户端发送指令。

### 热重载

所有指令都是可以热重载的，这意味着您可以在bot程序运行的时候修改、添加、删除绝大多数指令，之后通过一行指令重新读取所有指令的缓存。这个过程不需要重启程序，甚至不需要下线正在工作的 bot

**指令热重载不代表您可以在机器人正在执行连续指令的过程中重载，这通常导致连续任务的终止，但理论上可能导致任何未定义的严重后果**

**因此，保证您使用 clearAll 指令停止一切命令，之后再重载指令**

所有放置在 commands 文件夹下的 js 文件都被认为是指令，文件名就是调用指令的指令码。

指令中可以写很多函数，但所有指令必须具有规范的入口，以便机器人调用。指令入口如下，注意二者的函数/变量名，不可变化。commands 目录下已有很多写好的指令，您可参考。

```js
// 任务函数入口，其中bot是执行任务的 isbot 实例，sender:string 是指令发送者， params:string[] 是指令码后面的所有参数，按照空格拆分
async function run(bot, sender, params){}

// 可选，指令的帮助文档，每个字符串一行
const doc : string[]
```

### 参数 bot

应当执行此指令的 isbot 实例。IsBot 类具有以下属性:

|属性|数据类型|意义|
|---|---|---|
|name|string|机器人的玩家名|
|options|object|机器人的配置|
|commands|array|机器人可执行的命令|
|bot|mineflayer_bot|mineflayer的机器人客户端实例|

其中，options主要有以下属性

|属性|数据类型|意义|
|---|---|---|
|username|string|=bot.name|
|account|string|此机器人的微软账户|
|master|string[ ]|此机器人的主人们|

此外，每个机器人的 options 中也包含从 config/server.json读取的所有属性。

bot属性为mineflayer的机器人客户端实例，参考 [本程序依赖的mineflayer的帮助](./node_modules/mineflayer/docs/zh/API.md)

### 参数 params

字符串数组，其数量可以为0。params始终传给指令，请在run函数中自行对参数和合法性进行检查。 




