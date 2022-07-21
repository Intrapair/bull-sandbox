import { jobOptions, messagingQueue } from "./bull-config";
(async function producer() {
    const data1 = {
        email: "adefemih214@yahoo.com",
        subject: "welcome to bull mq",
        message: "sample email"
    }
    const data2 = {
        email: "adefemiadeoye@yahoo.com",
        subject: "welcome to bull mq",
        message: "sample email"
    }
    const data3 = {
        email: "adefemih214@gmail.com",
        subject: "welcome to bull mq",
        message: "sample email"
    }

    console.log("in producer");
    const jobName = String(process.env.JOB_NAME)
    await messagingQueue.add(jobName, data1, )
    await messagingQueue.add(jobName, data2, )
    await messagingQueue.add(jobName, data3, )

    console.log("job added to queue");
})()

messagingQueue.on("waiting", (job) => {
    console.log("waiting", job.data.email);
})