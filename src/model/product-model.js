const sequelize = require ("../database/config")
const {DataTypes} = require("sequelize")

const Product = sequelize.define("products", {
    product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product_price: {
        type: DataTypes.FLOAT(10, 2),
        allowNull: false
    },
    product_category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product_image:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
});

module.exports = Product;