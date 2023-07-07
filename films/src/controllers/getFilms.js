const Film = require("../data/index");

module.exports = async (req, res) => {
  const films = await Film.film();
  res.status(200).json(films);
};
