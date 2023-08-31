const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
// Utilisez d'autres contrôleurs ici pour d'autres fonctionnalités d'authentification

module.exports = router;