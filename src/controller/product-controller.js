const { productService } = require ("../service")

const listAllProduct = async function(req, res) {
    try {
    const product = await productService.listAllProduct()
    res.json(product);
    }catch (err) {
        res.status(500).json({ action: "listAll", error: err.message });
    }
};

const listOneProduct = async (req, res) => {
    try {
        const product_id = req.params.product_id;
        const product = await productService.listOneProduct(product_id);
       res.json(product)
    } catch (err) {
        res.status(500).json({ action: "listOne", error: err.message });
    }
    
};

const createProduct = async function (req, res) {
    const { product_name, product_price, product_category, product_image } = req.body;
  
    try {
      const newProduct = await productService.createProduct(req.body);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Unable to create product.' });
    }
  }

const updateProduct = async (req, res) => {
    try {
        const productUpdate = await productService.updateProduct(req.params.product_id, req.body);
        res.json(productUpdate);
    } catch (err) {
        res.status(500).json({ action: 'updateProduct', error: err.message});
    }
};

const deleteProduct = async (req, res) => {
    try { 
        await productService.deleteProduct(req.params.product_id);
        res.json({message: 'Product deleted successfully'})
    } catch (err) {
        res.status(500).json({ action: 'deleteProduct', error: err.message});
    }
};



module.exports = { listAllProduct, listOneProduct, createProduct, updateProduct, deleteProduct };
