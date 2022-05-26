/**
 * import Queue from bullmq
 * parse the connection parameter from the env file
 * create a function that accepts the queue name and the connection instance 
 * export the queue instance as a reusable module
 * TODO: read queue name from .env
 */
import { Queue, QueueOptions } from "bullmq";
import dotenv from "dotenv"
dotenv.config();
console.log("parsed .env");

const connection = {
    host: String(process.env.REDIS_HOST),
    port: Number(process.env.REDIS_PORT)
}
export const jobOptions = {
    removeOnComplete: true, // remove job if complete
    delay: 60000, // 1 = 60000 min in ms
    attempts: 3 // attempt if job is error retry 3 times
}
const queueName = String(process.env.QUEUE_NAME)
export const messagingQueue = new Queue(queueName, { connection })

