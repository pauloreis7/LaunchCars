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

        data.price = data.price.replace(/\D/g, "")

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
    },

    update(data) {
        
        const query = `
        UPDATE cars SET
            model_id = ($1),
            agency_id = ($2),
            board = ($3),
            color = ($4),
            price = ($5),
            name = ($6)
        WHERE id = ${ data.id }
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

    delete(id) {

        return db.query(`DELETE FROM cars WHERE id = ${ id }`)
    }
}