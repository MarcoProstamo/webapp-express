import { connection } from "../connections/moviesConnection.js";

const controller = {
  index(req, res) {
    const indexSql = `SELECT * FROM movies.movies;`;
    connection.query(indexSql, (err, data) => {
      if (err) res.json({ status: "KO", message: err.sqlMessage });
      res.json(data);
    });
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
