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

const createHero = async (req, res) => {
    try {
        const { name, publisher_id } = req.body;
        const photo = req.file ? req.file.filename : null;
        const newHero = await heroesModel.createHero(name, publisher_id, photo);
        res.status(201).json(newHero);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar herói!"});
    }
};

const updateHero = async (req, res) => {
    try {
        const { name, publisher_id } = req.body;
        const updateHero = await heroesModel.updateHero(req.params.id, name, publisher_id);
        if (!updateHero) {
            return res.status(404).json({ message: "Herói não encontrado!"});
        }
        res.json(updateHero);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar herói!"});
    }
};

const deleteHero = async (req, res) => {
    try{
        const message = await heroesModel.deleteHero(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar herói!"});
    }
};

module.exports = {getAllHeroes, getHero, createHero, updateHero, deleteHero};