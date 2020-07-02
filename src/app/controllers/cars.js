const Car = require('../Models/Car') 
const Model = require('../Models/Model')
 
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
        const product = results.rows[0]

        return res.render("products/create", { product })
    },

    //EditPage
    async edit (req, res) {

        const { id } = req.params

        let results = await Model.all()
        const models = results.rows

        results = await Car.find(id)
        const car = results.rows[0]

        if (!car) return res.send("Car does not exist")

        return res.render("products/create", { models, car })
    }

}