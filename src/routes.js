const express = require('express')

const routes = express.Router()

const cars = require('./app/controllers/cars')

routes.get("/", function (req, res) {
    return res.render("index")
})

// Cars Routes

routes.get("/products/create", cars.create)

routes.post("/products", cars.post)

routes.get("/products/:id/edit", cars.edit)

module.exports = routes