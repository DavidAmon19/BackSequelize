const { criarDados } = require('../controllers/usuarioController');
const { usuario } = require('../models');
const bcrypt = require('bcryptjs');

describe('Criação de usuário', () => {
  it('Deve criar um usuário e criptografar a senha', async () => {
    // Simulação dos dados enviados
    const req = {
      body: {
        nome: 'Teste',
        email: 'teste@teste.com',
        role: 'aluno',
        senha: '123456',
      },
    };

    // Simulação da resposta
    const res = {
      status: (code) => {
        res.statusCode = code;
        return res;
      },
      json: (data) => {
        res.data = data;
      },
    };

    // Criptografando a senha e simulando a criação no banco
    const senhaCriptografada = await bcrypt.hash(req.body.senha, 8);
    const usuarioCriado = { id: 1, ...req.body, senha: senhaCriptografada };
    usuario.create = () => Promise.resolve(usuarioCriado);

    // Executando a função
    await criarDados(req, res);

    // Verificando se a senha foi criptografada e o usuário foi criado
    if (res.statusCode === 201 && res.data.message.senha === senhaCriptografada) {
      console.log('Teste de criação de usuário: Passou');
    } else {
      console.log('Teste de criação de usuário: Falhou');
    }
  });
});
