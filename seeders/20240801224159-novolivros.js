"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("tb_livros", [
      {
        titulo: 'Arquitetura limpa',
        autor: 'Miro Lopes',
        imagem: 'https://m.media-amazon.com/images/I/815d9tE7jSL._SY466_.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Algoritmos com Javascript',
        autor: 'Miro Lopes',
        imagem: 'https://m.media-amazon.com/images/I/41+6FmZ+qRL._SY445_SX342_.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'SQL a base para iniciar',
        autor: 'Miro Lopes',
        imagem: 'https://s3.novatec.com.br/capas-ampliadas/capa-ampliada-9788575225011.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Testes unitarios e de integração',
        autor: 'Miro Lopes',
        imagem: 'https://s3.novatec.com.br/capas-ampliadas/capa-ampliada-9788575227220.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      }

    ], {});
  },

  async down(queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('tb_livros', null, {});
     
  },
};
