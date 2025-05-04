const express = require("express");
const router = express.Router();
const heroesController = require("../controllers/heroesController");

router.get("/heroes", heroesController.getAllHeroes);
router.get("/heroes/:id", heroesController.getHero);
router.post("/heroes", heroesController.createHero);

module.exports = router;