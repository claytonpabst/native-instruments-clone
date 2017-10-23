var app = require('./index.js');

module.exports = {

    getProducts: function(req, res, next){
        const db = req.app.get('db');
        db.getProducts()
        .then( products => {
            console.log(products)
            return res.status(200).send( products )
        })
        .catch(err => res.status(500).send(err))
    }
}