const express = require('express')

const routes = express.Router()

const cars = require('./app/controllers/cars')

routes.get("/", function (req, res) {
    return res.render("index")
})

routes.get("/products/create", cars.create)

module.exports = routes