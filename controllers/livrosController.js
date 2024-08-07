const { livro } = require("../models");

const buscarDados = async (req, res) => {
  const dados = await livro.findAll();
  res.json(dados);
};

const buscarDadosPorId = async (req, res) => {
  const { id } = req.params;
  const dados = await livro.findByPk(id);

  if (!dados) {
    res.status(404).json({
      message: "Livro não encontrado",
    });
  }

  res.status(200).json(dados);
};

const criarDados = async (req, res) => {
  const { titulo, autor, imagem } = req.body;

  const dados = await livro.create({ titulo, autor, imagem });

  res.status(201).json(dados);
};

const atualizarDados = async (req, res) => {
  const { id } = req.params;
  const { titulo, autor, imagem } = req.body;
  const dados = await livro.findByPk(id);

  if (!dados) {
    return res.status(404).json({
      message: `Livro não encontrado`,
    });
  }

  await dados.update({ titulo, autor, imagem });
  res.status(200).json(dados);
};

const deletarDados = async (req, res) => {
  const { id } = req.params;
  const dados = await livro.findByPk(id);

  if (!dados) {
    return res.status(404).json({
      message: `Livro não encontrado`,
    });
  }


  await dados.destroy();

  res.status(204).json({message: `Livro deletado com sucesso`})
};

module.exports = {
  buscarDados,
  buscarDadosPorId,
  criarDados,
  atualizarDados,
  deletarDados
};
