import express from "express";
const app = express();

// # Server Listening
const { APP_HOST, APP_PORT } = process.env;
app.listen(APP_PORT, () => {
  console.log(`Server listening at ${APP_HOST}:${APP_PORT}`);
});
