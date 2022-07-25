const Sequelize = require('sequelize');
// Conexão com o banco de dados
const sequelize = new Sequelize('db_cadastro', 'postgres', 'eduardo2001', {
    host: 'localhost',
    dialect:'postgres'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}