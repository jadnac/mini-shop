const { GetProductById, CreateProduct } = require('../controllers/product.controller')
const router = require('express').Router()

router.post('/create', CreateProduct)

router.get('/:id', GetProductById)

module.exports = router