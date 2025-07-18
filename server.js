require("dotenv").config();
const express = require("express");
const cors = require("cors");
const publishersRoutes = require("./src/routes/publishersRoutes");
const heroesRoutes = require("./src/routes/heroesRoutes");
const reportRoutes = require("./src/routes/reportRoutes");
const path = require("path");
const setupSwagger = require("./src/config/swagger");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/publishers", publishersRoutes);
app.use("/api", heroesRoutes);
app.use("/api", reportRoutes);
setupSwagger(app);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
 