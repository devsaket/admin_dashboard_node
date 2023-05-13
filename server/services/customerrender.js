const axios = require('axios')

exports.homeRoute = (req,res)=>{
    res.send("Hello World")
}

exports.customerHomeRoute = (req,res)=>{
    // res.send("Hello World")

    //Make a get request to /api/customers
    axios.get('http://localhost:5000/api/customers')
    .then(function(response){
        //console.log(response)
        res.send(response.data)
    })
    .catch(err =>{
        res.send(err)
    })
}

exports.addCustomerRoute = (req, res)=>{
    res.send('Customer Added Successfully')
}

exports.updateCustomerRoute = (req, res)=>{
    // res.render('update_user')
    
    axios.get('http://localhost:5000/api/customers/:id', {params: {id: req.query.id}})
    .then(function(response){
        res.render("updateCustomer",{user: response.data})
    })
    .catch(err=>{
        res.send(err)
    })
}
