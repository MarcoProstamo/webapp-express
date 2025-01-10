import express from "express";
import { controller as moviesController } from "../controllers/moviesController.js";
const router = express.Router();

router.get("/", moviesController.index);
router.get("/:id", moviesController.show);
router.post("/", moviesController.create);
router.put("/:id", moviesController.update);
router.patch("/:id", moviesController.modify);
router.delete("/:id", moviesController.destroy);

export { router };
