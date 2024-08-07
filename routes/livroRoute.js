const express = require("express");
const router = express.Router();
const livrosController = require("../controllers/livrosController");
const authMiddleware = require("../middlewares/authMiddleware");


router.get('/', livrosController.buscarDados);
router.get('/id', livrosController.buscarDadosPorId);
router.post('/', authMiddleware, livrosController.criarDados);
router.put('/:id', authMiddleware, livrosController.atualizarDados);
router.delete('/:id', authMiddleware, livrosController.deletarDados);


module.exports = router;