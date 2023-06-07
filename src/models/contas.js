const contas = (sequelize, DataTypes) => {
    const Contas = sequelize.define('Contas', {
        Telefone: {
            type: DataTypes.STRING
        },
        Identificacao: {
            type: DataTypes.STRING
        },
        Dia: {
            type: DataTypes.DATE
        },
        Hora: {
            type: DataTypes.TIME
        },
        Valor: {
            type: DataTypes.DECIMAL
        }
    }, {
        tableName: 'contas'
    })

    return Contas
}

module.exports = contas