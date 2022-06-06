const router = require('express').Router();
let User = require('../models/User');

const { json } = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

router.route('/').get((req, res) => {
    console.log('users***');
    User.find()
        .then(dados => res.json(dados))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;