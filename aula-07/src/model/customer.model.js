module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('customer', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cpf: DataTypes.STRING,
        nome: DataTypes.STRING,
        email: DataTypes.STRING
    }, {
        timestamps: false,
        freezeTableName: true
    })

    return Customer
}
