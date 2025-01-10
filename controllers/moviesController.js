import { connection } from "../connections/moviesConnection.js";

const controller = {
  index(req, res) {
    res.send("Full Movies List");
  },

  show(req, res) {
    res.send(`Showing movie with ID ${req.params.id}`);
  },

  create(req, res) {
    res.send("Created Movie");
  },

  update(req, res) {
    res.send(`Updating movie with ID ${req.params.id}`);
  },

  modify(req, res) {
    res.send(`Partially modifying movie with ID ${req.params.id}`);
  },

  destroy(req, res) {
    res.send(`Deleted movie with ID ${req.params.id}`);
  },
};

export { controller };
