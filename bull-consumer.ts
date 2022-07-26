import { Worker, Job } from 'bullmq';
import dotenv from "dotenv"
import { BULLMQ_CONNECTION } from './bull-config';
import { mailer } from './mailer';
dotenv.config();
console.log("parsed .env");

const worker = new Worker(String(process.env.QUEUE_NAME),
    async (job: Job) => {
        //do something with the data
        console.log(job.data)
    }, { connection: BULLMQ_CONNECTION })


worker.on("completed", (job) => {
    console.log("completed", job.data.email);
})

