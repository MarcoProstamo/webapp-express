import express from "express";
const app = express();

// # Registering Middlewares
import errorsHandler from "./middlewares/errorsHandler.js";
import pageNotFoundHandler from "./middlewares/pageNotFoundHandler.js";

// # JSON Parser + Static File in Public Folder
app.use(express.json());
app.use(express.static("public"));

// # Router Setup
import { router as moviesRouter } from "./routers/moviesRouter.js";
app.use("/movies", moviesRouter);

// # Meme Homepage
app.get("/", (req, res) => {
  res.send("Benvenuto nel Circo 🤡");
});

// # Errors Handler
app.use(errorsHandler);
app.use(pageNotFoundHandler);

// # Server Listening
const { APP_HOST, APP_PORT } = process.env;
app.listen(APP_PORT, () => {
  console.log(`Server listening at ${APP_HOST}:${APP_PORT}`);
});
