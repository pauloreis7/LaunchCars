const Car = require('../Models/Car') 
const Model = require('../Models/Model')

const { formatPrice } = require('../../lib/utils')
 
module.exports = {

    //CreatePage
    async create (req, res) {

        // Model.all().then( function (results) {
            
        //     const models = results.rows

        //     return res.render("products/create", { models })
        // }).catch(function (err) {

        //     throw new Error(err)
        // })

        const results = await Model.all()
        const models = results.rows
        return res.render("products/create", { models })
    },

    //Create 
    async post (req, res) {

        const keys = Object.keys(req.body) 

        for ( key of keys) {
            if (req.body[key] == "") {
                return res.send("Please fill all fields!")
            }
        }

        const results = await Car.create(req.body)
        const productId = results.rows[0].id

        return res.redirect(`/products/${ productId }/edit`)
    },

    //EditPage
    async edit (req, res) {

        const { id } = req.params

        let results = await Model.all()
        const models = results.rows

        results = await Car.find(id)
        const car = results.rows[0]

        car.price = formatPrice(car.price)

        if (!car) return res.send("Car does not exist")

        return res.render("products/edit", { models, car })
    },

    // Update
    async put (req, res) {

        const keys = Object.keys(req.body) 

        for ( key of keys) {
            if (req.body[key] == "") {
                return res.send("Please fill all fields!")
            }
        }

        req.body.price = req.body.price.replace(/\D/g, "")

        await Car.update(req.body)
        
        return res.redirect(`/products/${ req.body.id }/edit`)
    },

    // Delete
    async delete (req, res) {

        await Car.delete(req.body.id)

        return res.redirect("/")
    }

}