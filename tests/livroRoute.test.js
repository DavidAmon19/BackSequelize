const request = require('supertest');
const app = require('../server');
const { livro } = require('../models');

describe('Rota de busca de livros', () => {
  it('Deve retornar todos os livros', async () => {
    const livrosMock = [
      { id: 1, titulo: 'Livro 1', autor: 'Autor 1', imagem: 'imagem1.jpg' },
      { id: 2, titulo: 'Livro 2', autor: 'Autor 2', imagem: 'imagem2.jpg' },
    ];

    // Simulação da busca de livros no banco
    livro.findAll = () => Promise.resolve(livrosMock);

    // Fazendo a requisição e verificando o resultado
    const response = await request(app).get('/livros');

    if (response.status === 200 && response.body.length === livrosMock.length) {
      console.log('Teste de busca de livros: Passou');
    } else {
      console.log('Teste de busca de livros: Falhou');
    }
  });
});
