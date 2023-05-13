const express = require('express')

const router = express.Router()


const {homeRoute, customerHomeRoute, addCustomerRoute ,updateCustomerRoute } = require('../services/customerrender')
const controller = require('../controller/customercontroller')


router.get('/', homeRoute)

router.get('/customers', customerHomeRoute)

router.post('/addCustomer', addCustomerRoute)

router.get('/updateCustomer', updateCustomerRoute)


// API Paths
router.post('/api/customers', controller.create)
router.get('/api/customers', controller.find)
router.put('/api/customers/:id', controller.update)
router.delete('/api/customers/:id', controller.delete)

module.exports = router