'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tb_usuarios',[
      {
        nome: 'David knex',
        email: 'davi.miro@teste.com',
        role: 'admin',
        senha: 'Davi@123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Gustavo Miro',
        email: 'gustavo.miro@teste.com',
        role: 'aluno',
        senha: 'Gustavo@123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Perlon knex',
        email: 'perlon.miro@teste.com',
        role: 'aluno',
        senha: 'Perlon@123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Alex knex',
        email: 'alex.miro@teste.com',
        role: 'aluno',
        senha: 'Alex@123',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('tb_usuarios', null, {});
  }
};



//Esse primeiro vale 1

// Proximo vale 2

// db:seed:all

// db:seed:ondo