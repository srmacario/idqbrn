const router = require('express').Router();
let Dados = require('../models/Dados');

const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
require('dotenv').config();

router.route('/').get((req, res) => {

    Dados.find()
        .then(dados => res.json(dados))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
