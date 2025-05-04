const pool = require("../config/database.js");
const publishersModel = require("../models/publishersModel.js");

const getAllPublishers = async (req, res) => {
    try {
        const publishers = await publishersModel.getPublishers();
        res.json(publishers);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar Editoras!"});
    }
};

const getPublisher = async (req, res) => {
    try {
        const publisher = await publishersModel.getPublisherById(req.params.id);
        if (!publisher) {
            return res.status(404).json({ message: "Editora não foi encontrada!"});
        }
        res.json(publisher);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar Editora!"});
    }
};

const createPublisher = async (req, res) => {
    try {
        const { name } = req.body;
        const newPublisher = await publishersModel.createPublisher(name);
        res.status(201).json(newPublisher);
    } catch (error) {
        if (error.code === "23505") {
            return res.status(400).json({ message: "Essa Editora já existe!"});
        }
        res.status(404).json({ message: "Erro ao criar Editora!"});
    }
};

const updatePublisher = async (req, res) => {
    try {
        const { name } = req.body;
        const updatePublisher = await publishersModel.updatePublisher(req.params.id, name);
        if (!updatePublisher) {
            return res.status(404).json({ message: "Editora não foi encontrada!"});
        }
        res.json(updatePublisher);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar Editora!"});
    }
};

const deletePublisher = async (req, res) => {
    try {
        const message = await publishersModel.deletePublisher(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar Editora!"});
    }
};

module.exports = {getAllPublishers, getPublisher, createPublisher, updatePublisher, deletePublisher};