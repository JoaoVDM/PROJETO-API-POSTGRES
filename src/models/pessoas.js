const pessoas = (sequelize, DataTypes) => {
    const Pessoas = sequelize.define('Pessoas', {
        Nome: {
            type: DataTypes.STRING
        },
        Telefone: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'pessoas'
    })

    return Pessoas
}

module.exports = pessoas