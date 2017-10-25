var app = require('./index.js');

mainController = {

    getProducts: function(req, res){
        console.log('hit')
        const db = req.app.get('db');
        db.getProducts()
        .then( products => {
            console.log(products)
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
                req.session.user = response[0].username;

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
    loadCart(){
        console.log('loadCart hit')
    }
}

module.exports = mainController