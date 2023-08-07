const router = require("express").Router();
const controller = require ("../controller/product-controller")
//const test = require("../middleware/test")

router.get("/product", controller.listAllProduct)

router.get("/product/:product_id", controller.listOneProduct)

router.post("/product", controller.createProduct)//uploadFile.single('../images/product-images'),

router.put("/product/:product_id", controller.updateProduct)

router.delete("/product/:product_id", controller.deleteProduct)

module.exports = router;

