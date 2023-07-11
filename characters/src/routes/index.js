const { Router } = require("express");
const controller = require("../controllers");
const middlewares = require("../middlewares");


const router = Router();

router.get("/", controller.getCharacters);


//router.post("/", middlewares.characterValidation, controller.createCharacter);

module.exports = router;
