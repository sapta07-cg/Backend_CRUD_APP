const checkMiddleware = () => {
  return (req, res, next) => {
    console.log("Middleware worked");
    next();
  };
};

module.exports = {
  checkMiddleware,
};
