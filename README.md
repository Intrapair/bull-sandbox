# Node BullMQ sandbox

- the implementation uses `data` object instance containing `email`, `subject` and `message` fields
- each of the `data` is added to a queue
- the `data` object instances is retrieved from the queue and destructured
- the destructured info is passed to a `mailer` function which sends `subject` and `message` to the destructured `email`

```ts
//example user object
const data = {
  email: "example@bull.com",
  subject: "welcome to bull mq",
  message: "sample email",
};
```

## Development Server SetUp

- create `.env` and populate using `.env-example` template
- clone or download the repository
- navigate to the root directory then run `npm install`
- to create a queue and add jobs to it run `npm run produce`
- the see the current status of the Queue run `npm run status`
- to consume the created jobs, run `npm run consumer`
