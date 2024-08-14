const request = require('supertest');
const app = require('../server');
const { usuario } = require('../models');

describe('Rota de criação de usuário', () => {
  it('Deve criar um usuário com sucesso', async () => {
    const novoUsuario = {
      nome: 'Teste',
      email: 'teste@teste.com',
      role: 'aluno',
      senha: '123456',
    };

    // Simulação da criação de usuário no banco
    usuario.create = () => Promise.resolve({ id: 1, ...novoUsuario });

    // Fazendo a requisição e verificando o resultado
    const response = await request(app).post('/usuario').send(novoUsuario);

    if (response.status === 201 && response.body.message.nome === 'Teste') {
      console.log('Teste de criação de usuário via rota: Passou');
    } else {
      console.log('Teste de criação de usuário via rota: Falhou');
    }
  });
});
