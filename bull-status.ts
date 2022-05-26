import { messagingQueue } from "./bull-config";
import dotenv from "dotenv"
import { Job } from "bullmq";
dotenv.config();
console.log("parsed .env");

(async function consumer() {
    console.log("in consumer");
    const jobName = process.env.JOB_NAME
    const count = await messagingQueue.getJobCounts("wait", "completed", "failed")
    //TODO: add event listener to fire when when job arrive

  
    console.log(count);
})()
