const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.post('/create', productController.createProduct);
router.get('/getAll', productController.getAllProducts);
router.get('/get', productController.getProductById);
router.put('/update', productController.updateProduct); // Utilisation de put() pour la mise à jour
router.delete('/delete', productController.deleteProduct);
// Utilisez d'autres contrôleurs ici pour d'autres fonctionnalités d'authentification

module.exports = router;
