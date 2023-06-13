const empresa = (sequelize, DataTypes) => {
    const Empresas = sequelize.define('Empresa', {
        Nome: {
            type: DataTypes.STRING
        },
        Endereço: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'empresa'
    })

    return Empresas
}

module.exports = empresa