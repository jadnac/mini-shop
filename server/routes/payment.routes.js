const { Payment } = require('../controllers/payment.controller')
const router = require('express').Router()

router.post('/buy', Payment)

module.exports = router