const router = require('express').Router();
let User = require('../models/User');

const { json } = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

router.route('/').post((req, res) => {
    console.log('delete***');
    try {
        if (req.body.email !== 'admin') {
            console.log(req.body)
            User.findOneAndDelete({ email: req.body.email }, function (err, docs) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log("Deleted User : ", docs);
                    res.json({ status: 'ok' })
                }
            });
        }
        else {
            res.json({ status: 'admin' })
        }
    }
    catch (err) {
        res.json({ status: 'error' })
        console.log(err.stack)
    }
});

module.exports = router;