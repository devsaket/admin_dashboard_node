const axios = require('axios')

exports.homeRoute = (req,res)=>{
    res.send("Product")
}

exports.productHomeRoute = (req,res)=>{
    // res.send("Hello World")

    //Make a get request to /api/customers
    axios.get('http://localhost:5000/api/product')
    .then(function(response){
        //console.log(response)
        res.send(response.data)
    })
    .catch(err =>{
        res.send(err)
    })
}

exports.addProductRoute = (req, res)=>{
    res.send('Product Added Successfully')
}

exports.updateProductRoute = (req, res)=>{
    // res.render('update_user')
    
    axios.get('http://localhost:5000/api/product/:id', {params: {id: req.query.id}})
    .then(function(response){
        res.render("updateProduct",{user: response.data})
    })
    .catch(err=>{
        res.send(err)
    })
}
