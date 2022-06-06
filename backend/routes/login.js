const router = require('express').Router();
let User = require('../models/User');

const { json } = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.route('/').post((req, res) => {
    console.log('login***');
    User.findOne({
        email: req.body.email,
        password: req.body.password,
    }, function (err, user) {
        if (err) {
            res.json({ status: 'error', user: false })
        }
        else {
            if (user) {
                const token = jwt.sign(
                    {
                        email: user.email,
                    },
                    'segredo123'
                )
                res.json({ status: 'ok', user: token })
            }
            else {
                res.json({ status: 'error', user: false })
            }
        }
    });
});

module.exports = router;