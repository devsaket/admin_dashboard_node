var ProductTable = require('../models/productmodel')

exports.create = (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" })
        return
    }

    // new user
    const product = new ProductTable({
        productName: req.body.productName,
        productPrice: req.body.productPrice,
        manufacture: req.body.manufacture,
        quantity: req.body.quantity
    })

    //save user in the database
    product.save(product)
        .then(
            data => {
                res.send(data)
            }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            })
        })
}

// retrieve and return all users/ retrieve and return a single user
exports.find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id

        ProductTable.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Not found user with id" + id })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error retrieving user with id" + id })
            })

    } else {
        ProductTable.find()
            .then(user => { res.send(user) })
            .catch(err => { res.status(500).send({ message: err.message || "Error Occurred while retrieving user information" }) })
    }
}

//update a new identified user by user-id
exports.update = (req, res) => {
    // validate request
    if (!req.body) {
        return res.status(400).send({ message: "Data to Update can not be empty!" })
    }

    const id = req.params.id
    ProductTable.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Update user with ${id}. Maybe user not found` })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error Update user information" })
        })
}

//delete a new identified user by user-id
exports.delete = (req, res) => {
    const id = req.params.id

    ProductTable.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Delete user with ${id}. Maybe id is wrong` })
            } else {
                res.send({ message: "User was deleted successfully!" })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id" + id
            })
        })
}