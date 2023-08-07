const { productModel } = require('../model');

const listAllProduct = async function() {
    try {
        const products = await productModel.findAll()
        return products;
    } catch (err) {
        console.error('Error when fetching product', err);
        throw err;
    }
};

const listOneProduct = async (product_id) => {  
    try { 
        const product = await productModel.findByPk(product_id,
            { include: { all: true } }
        )
        return product;
    } catch (err) {
        console.error('Error when fetching product', err);
        throw err;
    }
};

const createProduct = async (product) => {
    try {  
        console.log("PROVIDER", product);
        const newProduct = await productModel.create({         
            product_name: product.product_name,
            product_price: product.product_price,
            product_category: product.product_category,
            product_image: product.product_image,
        })
        return newProduct;
    } catch (err) {
        console.error('Error when creating product', err);
        throw err;
    }
};

const updateProduct = async (product_id) => {
    try {
        const id = req.params.product_id;
        const dataproducts = req.body;
        const createProduct = await Product.create({
            product_name: dataproducts.product_name,
            product_price: dataproducts.product_price,
            productFk_categoria: dataproducts.productFk_categoria,
            product_image: dataproducts.product_image,
            productFk_categoria: dataproduct.productFk_categoria,

            where: {
                product_id: id
            }
        })
    } catch (err) {
        console.error('Error when updating product', err);
        throw err;
    }
};

const deleteProduct = async (product_id) => {
    try {
        const id = req.params.product_id;
        const deleteProduct = await Products.destroy({
            where: {
                product_id: id
            },
        });
    } catch (err) {
        console.error('Error when deleting product', err);
        throw err;
    }
};

module.exports = { listAllProduct, listOneProduct, createProduct, updateProduct, deleteProduct };
