const { Router } = require('express')
const router = Router()
const products = require('./products')

router.use(products)

module.exports = router;