import { Worker } from 'bullmq';
import dotenv from "dotenv"
import { mailer } from './mailer';
dotenv.config();
console.log("parsed .env");

const queueName = String(process.env.QUEUE_NAME)
// const token = "eYwS3pGtU5DWaLOJUz9n";

const worker = new Worker(queueName, async job => {
    //do something with the data
    // console.log("inside worker");
    // console.log("reading data");
    // mailer(job.data)
    console.log(job.data.email + "sent");
});

worker.on("completed", (job) => {
    console.log("completed", job.data.email);
})