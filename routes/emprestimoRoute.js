const express = require('express');
const router = express.Router();
const emprestimoController = require('../controllers/emprestimoController');
const authMiddleware = require('../middlewares/authMiddleware'); // Presumindo que você tenha um middleware de autenticação

// Rota para criar um novo empréstimo
router.post('/', authMiddleware, emprestimoController.criarEmprestimo);

// Rota para listar todos os empréstimos
router.get('/', authMiddleware, emprestimoController.listarEmprestimos);

// Rota para devolver um empréstimo
router.put('/:id/devolver', authMiddleware, emprestimoController.devolverEmprestimo);

// Rota para excluir um empréstimo
router.delete('/:id', authMiddleware, emprestimoController.excluirEmprestimo);

module.exports = router;
