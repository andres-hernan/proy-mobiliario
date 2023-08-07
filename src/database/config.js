const { Sequelize } = require("sequelize");
const Product = require("../model/product-model");

const sequelize = new Sequelize("alq-mobiliario", "root", "12345", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
});

async function testConnection() {
    try{
        await sequelize.authenticate()
        await sequelize.sync({ force: false });
        console.log("All Good!!")
    }catch(err) {
        console.log("All Bad!!", err)
    }
}

testConnection()

module.exports = sequelize 


