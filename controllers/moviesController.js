import { connection } from "../connections/moviesConnection.js";

const controller = {
  index(req, res) {
    const indexSql = `SELECT id, title, genre FROM movies.movies;`;
    connection.query(indexSql, (err, data) => {
      if (err) res.status(500).json({ status: "KO", message: err.sqlMessage });
      res.json(data);
    });
  },

  show(req, res) {
    const id = parseInt(req.params.id);
    if (isNaN(id))
      res.status(400).json({ status: "KO", messagge: "Invalid Parameter" });

    const showSql = `
    SELECT movies.id AS movie_id, 
       movies.title, 
       movies.director, 
       movies.genre, 
       movies.release_year, 
       movies.abstract, 
       movies.image, 
       GROUP_CONCAT(reviews.text SEPARATOR ' ') AS reviews
    FROM movies.movies 
    INNER JOIN reviews
    ON movies.id = reviews.movie_id
    WHERE movies.id = 1
    GROUP BY movies.id;
    `;
    connection.query(showSql, [id], (err, data) => {
      if (err) res.status(500).json({ status: "KO", message: err.sqlMessage });
      res.json(data);
    });
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
