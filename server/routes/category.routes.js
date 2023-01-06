const { GetAllCategories, CreateCategory } = require('../controllers/category.controller')
const router = require('express').Router()

router.get('/all', GetAllCategories)

router.post('/create', CreateCategory)


module.exports = router