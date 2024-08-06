module.exports = (sequelize, DataTypes) => {
  const emprestimo = sequelize.define(
    "emprestimo",
    {
      dataEmprestimo: DataTypes.DATE,
      dataDevolucao: DataTypes.DATE,
    },
    {
      tableName: "tb_emprestimos",
    }
  );
  emprestimo.associate = function (models) {
    emprestimo.belongsTo(models.usuario, {
      foreignKey: "usuario_id",
    });
    emprestimo.belongsTo(models.livro, {
      foreignKey: "livro_id",
    });
  };
  return emprestimo;
};
