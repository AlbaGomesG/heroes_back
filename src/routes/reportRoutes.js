const express = require("express");
const router = express.Router();

const reportController = require("../controllers/reportController");

router.get("/report/pdf", reportController.exportHeroesPDF);

module.exports = router;