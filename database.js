// Instancia de conexión a la Base de Datos
const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize(
  process.env.NAME_DB, 
  process.env.USER_DB, 
  process.env.PASS_DB, 
  {
    host: process.env.HOST_DB,
    dialect: process.env.DIALECT_DB,
    //port: process.env.PORT_DB, //descomentar el puerto para usar el 3307
});


const conectarDB = async () => {
    try {
        await sequelize.authenticate();
        // await sequelize.sync({ force: false });
        console.log('Conexión a BD exitosa');
      } catch (error) {
        console.error('Error:', error);
      }
}

module.exports = {
    conectarDB,
    sequelize,
    Sequelize,
    DataTypes
}