module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('produto', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataTypes.STRING,
        valor: DataTypes.REAL,
        quantidade: DataTypes.INTEGER
    }, {
        timestamps: false,
        freezeTableName: true
    })

    return Product
}
