const router = require('express').Router();
let Info = require('../models/Info');

const { json } = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

router.route('/doenca').get((req,res) =>{
    Info.find()
    .then(dados => res.json(dados))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/doenca').post((req, res) => {
    console.log("doencaPost")
    console.log(req.body);
    Info.findOne({ doenca: req.body.doenca })
        .then(dados => res.json(dados))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
    console.log('info***');
    const formasdecontagio = req.body.formasdecontagio;
    const sintomas = req.body.sintomas;
    const recomendacoes = req.body.recomendacoes;
    const doenca = req.body.doenca;
    const newInfo = {
        doenca: doenca,
        recomendacoes: recomendacoes,
        sintomas: sintomas,
        formasdecontagio: formasdecontagio,
    }
    Info.findOneAndReplace({ doenca: req.body.doenca },
        newInfo, null, function (err, docs) {
            if (err) {
                console.log(err)
                res.json({ status: "error" })
            }
            else {
                console.log("Original Doc : ", docs);
                res.json({ status: "ok" })
            }
        });
});
module.exports = router;