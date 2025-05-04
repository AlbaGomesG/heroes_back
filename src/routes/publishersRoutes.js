const express = require("express");
const router = express.Router();
const publishersController = require("../controllers/publishersController.js");
const apiKeyMiddleware = require("../config/apiKey.js");

router.use(apiKeyMiddleware);

/**
 * @swagger
 * /api/publishers:
 *   get:
 *     summary: Lista todas as editoras
 *     tags: [Publishers]
 *     responses:
 *       200:
 *         description: Lista de editoras
 */


router.get("/", publishersController.getAllPublishers);

/**
 * @swagger
 * /api/publishers/{id}:
 *   get:
 *     summary: Busca Editora por ID
 *     tags: [Publishers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Editora encontrada
 *       404:
 *         description: Editora não encontrada
 */

router.get("/:id", publishersController.getPublisher);

/**
 * @swagger
 * /api/publishers:
 *   post:
 *     summary: Cria uma nova editora
 *     tags: [Publishers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Editora criada
 */

router.post("/", publishersController.createPublisher);

/**
 * @swagger
 * /api/publishers/{id}:
 *   put:
 *     summary: Atualiza uma editora
 *     tags: [Publishers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Editora atualizada
 */

router.put("/:id", publishersController.updatePublisher);

/**
 * @swagger
 * /api/publishers/{id}:
 *   delete:
 *     summary: Deleta uma editora
 *     tags: [Publishers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Editora deletada
 */

router.delete("/:id", publishersController.deletePublisher);

module.exports = router;