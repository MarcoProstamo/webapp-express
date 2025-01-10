export default function pageNotFoundHandler(req, res, next) {
  const statusCode = 404;
  const message = "Page not Found";
  res.status(statusCode).json({
    status: "KO",
    message: message,
  });
}
