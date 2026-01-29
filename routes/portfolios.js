const express = require('express');
const router = express.Router();
const portfoliosController = require('../controllers/portfolios');

// Routes to get all of the portfolios and to get a single portfolio
router.get('/', portfoliosController.getAll);
router.get('/:id', portfoliosController.getSingle);

module.exports = router; 