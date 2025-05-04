require("dotenv").config();
const express = require("express");
const cors = require("cors");
const publishersRoutes = require("./src/routes/publishersRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/publishers", publishersRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
 