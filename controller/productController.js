const Product = require('../models/Product'); // Assurez-vous que le chemin d'accès vers votre modèle est correct

// Contrôleur pour créer un nouveau produit
const createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Contrôleur pour récupérer tous les produits
const  getAllProducts= async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Contrôleur pour récupérer un produit par son ID
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Produit non trouvé' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Contrôleur pour mettre à jour un produit
const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Produit non trouvé' });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Contrôleur pour supprimer un produit
const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndRemove(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Produit non trouvé' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};
