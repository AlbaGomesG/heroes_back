const heroesModel = require("../models/heroesModel");

const getAllHeroes = async (req, res) => {
    try {
        const { name } = req.query;
        const heroes = await heroesModel.getHeroes(name);
        res.json(heroes);
    } catch (error) {
    res.status(500).json({ message: "Erro ao buscar heróis!"});
    }
};

module.exports = {getAllHeroes};