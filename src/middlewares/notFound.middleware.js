function notFound(req, res) {
  return res.status(404).json({
    success: false,
    message: `Rota '${req.originalUrl}' não encontrada.`,
  });
}

module.exports = notFound;
