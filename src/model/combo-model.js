const { productModel } = require("./product-model");
const sequelize = require("../database/config")
const { DataTypes } = require("sequelize")

const Combo = sequelize.define("conjuntos", {
    combo_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    combo_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    combo_image:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
});



module.exports = Combo;//conjunto