const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    productName : { type : String, required:true },
    productPrice : {type : String, required:true, },
    manufacture : {type : String, required:true, },
    quantity : {type : String, required:true},
})

const ProductTable = mongoose.model('ProductTable', schema)

module.exports = ProductTable