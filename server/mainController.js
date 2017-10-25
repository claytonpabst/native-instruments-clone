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
            mainController.loadCart()
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
    }
}

module.exports = mainController