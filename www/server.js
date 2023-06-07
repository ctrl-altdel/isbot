const http = require('http');
const { generate_document, parse_markdown } = require('./documents');
const { BotManager } = require('../botcore/botmanager');
const { readFileSync, readdirSync } = require('fs');
const logger = require('../botcore/logsystem');

class BotServer {

    html_cache;
    index;
    doc_base;

    botmanager;
    http_server;

    constructor(accounts, mcserver, http_config) {
        this.load_html_cache();
        this.initialize();
    }

    load_html_cache() {
        this.html_cache = [];
        try {
            readdirSync("./www/html").forEach((file) => {
                let content = readFileSync("./www/html/" + file, "utf8");
                if(file == "index.html") this.html_cache["/"] = content;
                else if (file.endsWith(".html") || file.endsWith(".htm")) {
                    this.html_cache["/" + file.split(".")[0]] = content;
                }
            });
        }
        catch (err) {
            logger.error("Load html cache : " + err);
            return;
        }
        this.html_cache["/mdhelp"] = parse_markdown();
    }

    on_page_required(req, res) {
        if (req.url in this.html_cache) {
            res.writeHead(200, 'OK', 'text/html;charset=utf-8');
            res.end(this.html_cache[req.url]);
        }
        else {
            res.writeHead(404, 'Page Not Found', 'text/plain;charset=utf-8');
            logger.warn("Web Server : Received invalid GET url : " + req.url);
            res.end();
        }
    }

    on_request_heard(req, res) {
        let query = {};
        try {
            req.url.split("?").pop().split("&").forEach((item) => {
                let key_val = item.split("=");
                query[key_val[0]] = key_val[1];
            })
        }
        catch {
            logger.warn("Web Server : Received invalid GET url : " + req.url);
            res.writeHead(404, "", "text/plain;charset=utf-8");
            res.end();
            return;
        }
        res.writeHead(200, "OK", "text/plain;charset=utf-8");
        switch (query.type) {
            case "refresh":
                res.end(JSON.stringify(this.refresh_status()));
                break;
            case "docdata":
                let data = JSON.stringify(generate_document());
                res.end(data);
                break;
            case "login":
                if (query.username) {
                    this.botmanager.login(query.username);
                }
                else logger.warn("Web Server : Command is bad : " + json.stringify(query));
                res.end(JSON.stringify(this.refresh_status()));
                break;
            case "logout":
                if (query.username) {
                    this.botmanager.logout(query.username)
                }
                else logger.warn("Web Server : Command is bad : " + json.stringify(query));
                res.end(JSON.stringify(this.refresh_status()));
                break;
            case "logdata":
                res.end(logger.get_log());
                break;
            case "command":
                res.writeHead(302, { "Location": "/" });
                res.end(req.url.split("?")[0]);
                try {
                    let cmd = decodeURIComponent(query.text).replace(/\+/g, " ");
                    this.botmanager.pass_command(query.username, query.sendername, cmd);
                }
                catch (err) {
                    logger.error("Web Server : Error in performing command : " + err);
                }
                break;
            default:
                res.writeHead(404, "Resourse Not Found", "text/plain;charset=utf-8");
                logger.warn("Web Server : Received invalid GET url : " + req.url);
                res.end();
                return;
        }

    }

    refresh_status() {
        class data {
            username;
            account;
            status;
            constructor(obj) {
                this.username = obj.username;
                this.account = obj.account;
                this.status = obj.status;
            }
        }

        const list = [];
        for (let name in this.botmanager.botList) {
            list.push(new data(this.botmanager.botList[name]));
        }
        return list;
    }

    initialize() {
        this.botmanager = new BotManager(accounts, mcserver);
        this.http_server = http.createServer((req, res) => {
            if (req.method = "GET") {
                if (req.url.includes("?")) {
                    this.on_request_heard(req, res);
                }
                else {
                    this.on_page_required(req, res);
                }
            }
        });
        let port = http_config.ctrlport;
        this.http_server.listen(port, () => {
            logger.log(`Web control server started at port ${port}`);
        })
    }
}

module.exports = { BotServer }

