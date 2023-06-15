const logger = require('./logsystem');

let GlobalBotTask={

}

class Tasks {
    taskMap = new Map();
    account;
    /**
     * 添加任务
     * @param taskName
     * @param task
     * @param time
     */
    constructor(account) {
        this.account = account;
    }
    addTask(taskName, task,time,message) {

        if ((typeof task)!== "function") {
            return;
        }

        this.clearTask(taskName);

        let taskTime = time || 1000;

        let taskFun=async ()=>{
            let _job = this.taskMap.get(taskName);
            if (!_job.status) {
                return;
            }
            task();
        }


        GlobalBotTask[this.account]={};
        GlobalBotTask[this.account]= this.taskMap;
        let interval = setInterval(taskFun,taskTime );
        let job={
            status:true,
            message,
            jobId:interval
        }
        this.taskMap.set(taskName,job) ;
    }

    /**
     * 是否存在任务
     * @param taskName
     */
    hasTask(taskName) {
        return this.taskMap.has(taskName);
    }

    /**
     * 清除任务
     * @param taskName
     */
    clearTask(taskName) {
        if (this.hasTask(taskName)) {
            let job = this.taskMap.get(taskName);
            job.status = false;
            clearInterval(job.jobId);
            logger.log(`清理定时任务 ${taskName}`)
        }

    }

    /**
     * 清理所有
     */
    clearAllTask(){
        const keys = this.taskMap.keys();

        for (let key of keys) {
            this.clearTask(key)
        }

    }
}

module.exports={Tasks,GlobalBotTask}
