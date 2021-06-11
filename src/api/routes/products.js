const { Router } = require('express')
const router = Router()
const controller = require('../controllers/products')

router.get('/products', controller.getProducts)

router.get('/products/:id', controller.getProduct)


module.exports = router;