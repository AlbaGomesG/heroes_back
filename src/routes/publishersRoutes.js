const express = require("express");
const router = express.Router();
const publishersController = require("../controllers/publishersController.js");
const apiKeyMiddleware = require("../config/apiKey.js");

router.use(apiKeyMiddleware);

router.get("/", publishersController.getAllPublishers);
router.get("/:id", publishersController.getPublisher);
router.post("/", publishersController.createPublisher);
router.put("/:id", publishersController.updatePublisher);
router.delete("/:id", publishersController.deletePublisher);

module.exports = router;