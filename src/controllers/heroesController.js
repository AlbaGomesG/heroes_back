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

const getHero = async (req, res) => {
    try {
        const hero = await heroesModel.getHeroById(req.params.id);
        if (!hero) {
            return res.status(404).json({ message: "Herói não encontrado!"});
        }
        res.json(hero);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar Herói!"});
    }
};

module.exports = {getAllHeroes, getHero};