const db = require('../../config/db')

module.exports = {

    create(data) {
        const query = `
        INSERT INTO cars (
            model_id,
            agency_id,
            board,
            color,
            price,
            name
            ) VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING id
        `

        const values = [
            data.model_id,
            data.agency_id || 1,
            data.board,
            data.color,
            data.price,
            data.name,
        ]

        return db.query(query, values) 
    },

    find(id) {
        return db.query(`SELECT * FROM cars WHERE id = ${ id }`)
    }
}