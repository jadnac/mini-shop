const addToCartController = require('../controllers/addToCart.controller')
const router = require('express').Router()

router.post('', addToCartController.AddProductToCart)

router.get('/all', addToCartController.GetAllProductToCart)

router.post('/deleteaddtocartitem', addToCartController.deleteAddToCartProduct)

module.exports = router