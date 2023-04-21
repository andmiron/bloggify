const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        body: 'Got all the blogs'
    })
})

module.exports = router