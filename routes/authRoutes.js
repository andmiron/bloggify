const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

router.route('/signup')
    .get((req,res,next) => {
        res.render('signup')
        next()
    })
    .post(authController.signup)




module.exports = router