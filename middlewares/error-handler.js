const errorHandler = (error, req, res, next) => {
  return res.status(500).json(error);
};

module.exports = errorHandler;
