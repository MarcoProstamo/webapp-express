import { connection } from "../connections/moviesConnection.js";

const controller = {
  index(req, res) {
    const indexSql = `SELECT * FROM movies.movies;`;
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
       GROUP_CONCAT(reviews.name SEPARATOR ';') names,
       GROUP_CONCAT(reviews.vote SEPARATOR ';') votes,
       GROUP_CONCAT(reviews.text SEPARATOR ';') reviews
    FROM movies.movies 
    INNER JOIN reviews
    ON movies.id = reviews.movie_id
    WHERE movies.id = ?
    GROUP BY movies.id;
    `;
    connection.query(showSql, [id], (err, data) => {
      if (err) res.status(500).json({ status: "KO", message: err.sqlMessage });
      res.json(data);
    });
  },

  storeReview(req, res) {
    const id = parseInt(req.params.id);
    const { name, vote, text } = req.body;

    if (!name)
      res.status(400).json({
        status: "KO",
        message: "Invalid Name Input",
      });

    if (!text)
      res.status(400).json({
        status: "KO",
        message: "Invalid Text Input",
      });

    if (isNaN(vote))
      res.status(400).json({
        status: "KO",
        message: "Invalid Vote Input",
      });

    if (vote > 5 || vote < 1)
      res.status(400).json({
        status: "KO",
        message: "Invalid Vote Input",
      });

    const sql =
      "INSERT INTO `movies`.`reviews` (`movie_id`, `name`, `vote`, `text`) VALUES (?, ?, ?, ?);";
    connection.query(sql, [id, name, vote, text], (err) => {
      if (err) res.status(500).json({ status: "KO", message: err.sqlMessage });
      res.json({
        status: "OK",
        message: "Review Created",
      });
    });
  },
};

export { controller };
