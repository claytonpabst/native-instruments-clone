var app = require('./index.js');

mainController = {

    getProducts: function(req, res){
        const db = req.app.get('db');
        db.getProducts()
        .then( products => {
            return res.status(200).send( products )
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    },
    getProductsInCart: function(req, res){
        const db = req.app.get('db');
        if(req.session.isLoggedIn){
            db.getProductsInCart()
            .then( productsInCart => {
                return res.status(200).send( productsInCart )
            })
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
        } else {
            return res.status(200).send([])
        }
    },
    login: function(req, res){
        console.log('hit')
        const db = req.app.get('db');
        db.login([req.body.username, req.body.userpassword])
        .then( response => {
            if(response.length){
                req.session.isLoggedIn = true;
                req.session.user = response[0].id;

                if(response[0].isadmin === true){
                    req.session.isAdmin = true
                } else {
                    req.session.isAdmin = false
                }
            } else {
                return res.status(200).send('Invalid username or password.')
            }
            console.log(response)
            console.log(req.session)
            return res.status(200).json( response )
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        })        
    },
    loadCart: function(){
        console.log('loadCart hit')
    },
    addToCart: function(req, res){
        const db = req.app.get('db');        
        db.getCart([req.session.user])
        .then( response => {
            for(let i=0; i<response.length; i++){
                if(response[i].productid === req.body.productID){
                    let quantity = response[i].quantity;
                    quantity++;
                    db.addOneToQuantityInCart([req.body.productID, quantity, req.session.user])
                    .then(response => {
                       return res.status(200).send(response)
                    })
                    return
                }
            }
            db.addProductToCart([req.body.productID, req.session.user])
            .then( response => {
                return res.status(200).send(response)
            })
            console.log(response)
        })
    },
    addProduct: function(req, res){
        const db = req.app.get('db');
        console.log(req.session)
        if(req.session.isAdmin === false || !req.session.isAdmin){
            return res.status(200).send( 'This function requires being logged in as an admin.' )
        }
        db.addProduct([req.body.title, req.body.description, req.body.price, req.body.image, req.body.attributes])
        .then( product => {
            console.log(product)
            return res.status(200).send( req.body.title + ' was added to the products database.' )
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    }
}

module.exports = mainController