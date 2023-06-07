const sequelize = require('../config/sequelize')
const Sequelize = require('sequelize')

const Contas = require('./contas')
const Empresas = require('./empresa')
const Pessoas = require('./pessoas')

const contas = Contas(sequelize, Sequelize.DataTypes)
const empresa = Empresas(sequelize, Sequelize.DataTypes)
const pessoas = Pessoas(sequelize, Sequelize.DataTypes)

// Inicializou o arquivo de configuração do sequelize junto com os models
const db = {
    contas,
    empresa,
    pessoas,
    sequelize
}

module.exports = db