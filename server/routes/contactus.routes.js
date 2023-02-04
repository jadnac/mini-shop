const contactusController = require('../controllers/contactus.controller')
const router = require('express').Router()

router.post('', contactusController.SaveContactUs)

module.exports = router