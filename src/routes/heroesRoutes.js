const express = require("express");
const router = express.Router();
const heroesController = require("../controllers/heroesController");
const upload = require("../config/upload");
const apiKeyMiddleware = require("../config/apiKey");

router.use(apiKeyMiddleware);

/**
 * @swagger
 * /api/heroes:
 *   get:
 *     summary: Lista todos os heróis
 *     tags: [Heroes]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Filtro por nome
 *     responses:
 *       200:
 *         description: Lista de heróis
 */

router.get("/heroes", heroesController.getAllHeroes);

/**
 * @swagger
 * /api/heroes/{id}:
 *   get:
 *     summary: Busca herói por ID
 *     tags: [Heroes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Herói encontrado
 *       404:
 *         description: Herói não encontrado
 */

router.get("/heroes/:id", heroesController.getHero);

/**
 * @swagger
 * /api/heroes:
 *   post:
 *     summary: Cria um novo Herói
 *     tags: [Heroes]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               publisher_id:
 *                 type: integer
 *               photo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Herói criado
 */

router.post("/heroes", upload.single("photo"), heroesController.createHero);

/**
 * @swagger
 * /api/heroes/{id}:
 *   put:
 *     summary: Atualiza um Herói
 *     tags: [Heroes]
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
 *               publisher_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Herói atualizado
 */

router.put("/heroes/:id", heroesController.updateHero);

/**
 * @swagger
 * /api/heroes/{id}:
 *   delete:
 *     summary: Deleta um Herói
 *     tags: [Heroes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Herói deletado
 */

router.delete("/heroes/:id", heroesController.deleteHero);

module.exports = router;