const db = require('./db')

const Cad = db.sequelize.define('cadastros',{
    nome: {
        type: db.Sequelize.STRING
      },
      login: {
        type: db.Sequelize.STRING
      },
      senha: {
        type: db.Sequelize.STRING
      }
})

//Cad.sync({force: true})

module.exports = Cad