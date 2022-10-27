import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        return res.status(200).json({ message: `Product successfully created`, newProduct });
    } catch (error) {
        if(error.code === 11000) return res.status(500).json({ message: `Duplicate Key Error`, error });
        return res.status(500).json({ message: `Couldn't create product`, error });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });

        return res.status(200).json({ message: `Product has been updated`, updatedProduct });
    } catch (error) {
        return res.status(500).json({ message: `Could not update the Product`, error });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);

        return res.status(200).json({ message: `Product has been deleted`, deletedProduct });
    } catch (error) {
        return res.status(500).json({ message: `Could not delete the product`, error });
    }
};

export const getProducts = async (req, res) => {
    try {
        const { category, ...rest } = req.query;
        const query = {...rest};
        
        if(category) query.categories = category;

        const products = await Product.find(query);

        if (products.length === 0) return res.status(500).json({ message: `No products found` });

        return res.status(200).json({ message: `Products found`, products });
    } catch (error) {
        return res.status(500).json({ message: `Could not get products`, error });
    }
};

export const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);

        if (!product) return res.status(500).json({ message: `Product not found` });

        return res.status(200).json({ message: `product found`, product });
    } catch (error) {
        return res.status(500).json({ message: `product not found`, error });
    }
};
