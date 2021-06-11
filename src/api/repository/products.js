const database = require('../database')


async function getAllProducts() {
    let itens = []
    await new Promise(function(resolve, reject) {
        return database.query('SELECT * from produto', function(error, results, fields) {
            if (error) throw reject(error)
            itens = results
            resolve()
        })
    })
    return itens
}

async function searchProducts(search) {
    let itens = []
    await new Promise(function(resolve, reject) {
        return database.query('SELECT * from produto where nome like ?', [search], function(error, results, fields) {
            if (error) throw reject(error)
            itens = results
            resolve()
        })
    })
    return itens
}

async function getProductById(id) {
    let iten
    await new Promise(function(resolve, reject) {
        return database.query('SELECT * from produto where id = ?', [id], function(error, results, fields) {
            if (error) throw reject(error)
            iten = results[0]
            resolve()
        })
    })
    return iten
}

module.exports = { getAllProducts, getProductById, searchProducts }