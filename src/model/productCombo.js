const sequelize = require ("../database/config")
const {DataTypes} = require("sequelize")
const { Combo} = require ("./combo-model")
const { productModel} = require ("./product-model")

const ProductCombo = sequelize.define("products-combo", {
    product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
  
   
});

Combo.belongsToMany(productModel, { through: 'ProductCombo' });
productModel.belongsToMany(Combo, { through: 'ProductCombo' });

module.exports = productModel;