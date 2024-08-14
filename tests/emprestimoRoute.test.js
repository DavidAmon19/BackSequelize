const request = require('supertest');
const app = require('../server');
const { emprestimo } = require('../models');

describe('Rota de empréstimo de livro', () => {
  it('Deve criar um empréstimo de livro com sucesso', async () => {
    const novoEmprestimo = {
      dataEmprestimo: new Date(),
      dataDevolucao: null,
      usuario_id: 1,
      livro_id: 1,
    };

    // Simulação de que o livro não está emprestado
    emprestimo.findOne = () => Promise.resolve(null);
    // Simulação da criação do empréstimo
    emprestimo.create = () => Promise.resolve(novoEmprestimo);

    // Fazendo a requisição para criar o empréstimo
    const response = await request(app).post('/emprestimo').send(novoEmprestimo);

    // Verificando o resultado
    if (response.status === 201 && response.body.dataEmprestimo === novoEmprestimo.dataEmprestimo.toISOString()) {
      console.log('Teste de criação de empréstimo de livro: Passou');
    } else {
      console.log('Teste de criação de empréstimo de livro: Falhou');
    }
  });

  it('Não deve permitir emprestar o mesmo livro duas vezes ao mesmo tempo', async () => {
    const novoEmprestimo = {
      dataEmprestimo: new Date(),
      dataDevolucao: null,
      usuario_id: 1,
      livro_id: 1,
    };

    // Simulação de que o livro já está emprestado
    emprestimo.findOne = () => Promise.resolve(novoEmprestimo);

    // Tentativa de emprestar o livro novamente
    const response = await request(app).post('/emprestimo').send(novoEmprestimo);

    // Verificando o resultado
    if (response.status === 400 && response.body.message === 'Livro já está emprestado') {
      console.log('Teste de verificação de livro já emprestado: Passou');
    } else {
      console.log('Teste de verificação de livro já emprestado: Falhou');
    }
  });
});
