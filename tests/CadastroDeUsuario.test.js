process.env.NODE_ENV = 'development';
require('dotenv').config({path:'.env.test'});


const bcrypt = require("bcryptjs");
const { criarDados } = require("../controllers/usuarioController");
const { usuario } = require("../models");



describe('Teste de criação de usuaio', ()=>{
    it('Deve criar um usuario e criptografar a senha', async () => {
        // Simulação de envio de dados
        const req = {
            body: {
                nome: 'Davi Amorim',
                email: 'davi.amorin@teste.com.br',
                role: 'aluno',
                senha: 'Davi@123',
            }
        }

        // Simulação de resposta

        const res = {
            status: (code) =>{
                res.statusCode = code;
                return res;
            },

            json: (data) =>{
                res.data = data
            },
        };

        // Criptografia e senha e simulação  de criação no banco de dados
        const senhaCriptografada = await bcrypt.hash(req.body.senha, 8);
        const usuarioCriado      = {
            id: 1,
            nome: req.body.nome,
            email: req.body.email,
            role: req.body.role,
            senha: senhaCriptografada
        };

        usuario.create = () => Promise.resolve(usuarioCriado);

        // Exacução da função ou metodo da controller
        await criarDados(req, res);

        // Verificar se a senha foi criptografada e o usuario criado

        if(res.statusCode === 201 && res.data.senha === senhaCriptografada){
            console.log('Teste de criação: Passou')
        } else {
            console.log('Teste de criação: falhou')
        }


    });
})