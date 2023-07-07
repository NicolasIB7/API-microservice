const { Router } = require("express");
const store = require("../database");
const { validateModel } = require("../database/middlewares");

const router = Router();

router.get("/:model", validateModel, async (req, res) => {
  const { model } = req.params;
  const response = await store[model].list();
  res.status(200).json(response);
});

router.get("/:model/:id", validateModel, async (req, res) => {
  const { model, id } = req.params;
  const response = await store[model].get(id);
  res.status(200).json(response);
});

router.post("/:model", validateModel, async (req, res) => {
  const { model } = req.params;
  const { _id, name, birth_year, gender } = req.body;
  const response = await store[model].insert({ _id, name, birth_year, gender });
  res.status(200).json(response);
});

module.exports = router;
