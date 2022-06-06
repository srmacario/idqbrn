const router = require('express').Router();
let Dados = require('../models/Dados');

const { json } = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

router.route('/').get((req, res) => {
    console.log('a***');
    Dados.findOne()
        .then(dados => res.json(dados))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;