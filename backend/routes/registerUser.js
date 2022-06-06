const router = require('express').Router();
let User = require('../models/User');

const { json } = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

router.route('/').post((req, res) => {
    console.log('register***');
    try {
        console.log(req.body)
        const user = new User(
            {
                email: req.body.email,
                password: req.body.password,
            }
        )

        user.save()

        console.log(user)
        res.json({ status: 'ok' })
    }
    catch (err) {
        res.json({ status: 'error' })
        console.log(err.stack)
    }
});

module.exports = router;