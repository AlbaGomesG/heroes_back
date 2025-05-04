const express = require("express");
const router = express.Router();
const heroesController = require("../controllers/heroesController");

router.get("/heroes", heroesController.getAllHeroes);
router.get("/heroes/:id", heroesController.getHero);

module.exports = router;