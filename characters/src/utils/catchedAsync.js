module.exports = (fn) => (req, res, next) =>
  fn(req, res).catch((err) => next(err)); //esto me servirá para manejar el error y así en cada controlador permitir NO utilizar más try-catch
