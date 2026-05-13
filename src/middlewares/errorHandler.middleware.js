// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  console.error(`[ERROR] ${err.message}`);
  return res.status(500).json({
    success: false,
    message: "Erro interno do servidor.",
  });
}

module.exports = errorHandler;
