const express = require('express')

const router = express.Router()


const {homeRoute, productHomeRoute, addProductRoute ,updateProductRoute } = require('../services/productrender')
const controller = require('../controller/productcontroller')


router.get('/', homeRoute)

router.get('/product', productHomeRoute)

router.post('/addProduct', addProductRoute)

router.get('/updateProduct', updateProductRoute)


// API Paths
router.post('/api/product', controller.create)
router.get('/api/product', controller.find)
router.put('/api/product/:id', controller.update)
router.delete('/api/product/:id', controller.delete)

module.exports = router