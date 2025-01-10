export default function errorsHandler(err, req, res, next) {
  const statusCode = err.status ?? 500;
  const message = err.message || "An unexpected error occurred";
  res.status(statusCode).json({
    status: "KO",
    message: message,
  });
}
