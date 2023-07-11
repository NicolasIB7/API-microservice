const Character = require("../data/index");
const { response } = require("../utils");
const axios=require("axios");

module.exports = async (req, res) => {
  const characters = await Character.list();
  response(res, 200, characters);
};

