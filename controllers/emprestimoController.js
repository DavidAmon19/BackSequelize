const { emprestimo, usuario, livro } = require("../models");

const criarEmprestimo = async (req, res) => {
  const { usuario_id, livro_id, dataEmprestimo, dataDevolucao } = req.body;

  const livroEmprestado = await emprestimo.findOne({
    where: { livro_id, dataDevolucao: null },
  });
  if (livroEmprestado) {
    return res.status(400).json({ message: `Livro já está emprestado` });
  }

  const novoEmprestimo = await emprestimo.create({
    usuario_id,
    livro_id,
    dataEmprestimo,
    dataDevolucao,
  });
  res.status(201).json(novoEmprestimo);
};

const listarEmprestimos = async (req, res) => {
  const emprestimo = await emprestimo.findAll({
    include: [
      { model: usuario, attributes: ["nome", "email"] },
      { model: livro, attributes: ["titulo", "autor"] },
    ],
  });
  res.status(200).json(emprestimo);
};

const devolverEmprestimo = async (req, res) => {
  const { id } = req.params;

  const emprestimoAtual = await emprestimo.findByPk(id);

  if (!emprestimoAtual) {
    return res.status(404).json({ message: `Emprestimo não existe` });
  }

  emprestimoAtual.dataDevolucao = new Date();
  await emprestimoAtual.save();

  res
    .status(200)
    .json({ message: `Devolucao realizada com sucesso`, emprestimoAtual });
};

const excluirEmprestimo = async (req, res) => {
  const { id } = req.params;

  const emprestimo = await emprestimo.findByPk(id);
  if (!emprestimo) {
    return res.status(404).json({ message: `Emprestimo não existe` });
  }

  await emprestimo.detroy();

  res.status(204).json({message: `Emprestimo excluido com sucesso.`})
};

module.exports = {
  criarEmprestimo,
  listarEmprestimos,
  devolverEmprestimo,
  excluirEmprestimo
};
