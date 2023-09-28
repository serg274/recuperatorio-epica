const { Sequelize, DataTypes } = require("sequelize");

// Instancia de conexión a la base de datos
const sequelize = new Sequelize("test", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// sequelize.sync()

module.exports = {
  sequelize,
  Sequelize,
  DataTypes,
};
