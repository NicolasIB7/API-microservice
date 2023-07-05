const {Router} = require("express");
const controller = require("../controllers/index")
const middlewares= require("../middlewares")

const router=Router()

router.get("/", controller.getFilms  )

module.exports = router;