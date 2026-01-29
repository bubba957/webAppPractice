const { application, json } = require('express');
const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('portfolios').find();
    result.toArray().then((portfolios) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(portfolios);
    });
};

const getSingle = async (req, res) => {
    const portfolioId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('portfolios').find({ _id: portfolioId });
    result.toArray().then((portfolios) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(portfolios[0]);
    });
};

module.exports = {
    getAll,
    getSingle
};