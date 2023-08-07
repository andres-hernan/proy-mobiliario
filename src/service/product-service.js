const { productProvider } = require('../provider');

const listAllProduct = async function() {
    return await productProvider.listAllProduct();
};

const listOneProduct = async(product_id) => {
    const product = await productProvider.listOneProduct(product_id);
    return product
};

const createProduct = async (product) => {
    console.log('SERVICES', product);
    return await productProvider.createProduct(product);
};


const updateProduct = async(product_Id, updateproduct) => {
    return await productProvider.updateProduct(product_Id, updateproduct);
};

const deleteProduct = async (product_Id) => {
    return await productProvider.deleteProduct(product_Id);
};


module.exports = { listAllProduct, listOneProduct, createProduct, updateProduct, deleteProduct };
