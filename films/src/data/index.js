const films = require("./films.json");

module.exports = {
  film: async () => {
    return films;
  },
};
