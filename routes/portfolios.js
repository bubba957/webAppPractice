const express = require('express');
const router = express.Router();
const portfoliosController = require('../controllers/portfolios');

router.get('/', portfoliosController.getAll);

router.get('/:id', portfoliosController.getSingle);

module.exports = router; 