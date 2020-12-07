const kafka = require('../../kafka/client')

exports.addToCart = (req,res) =>{

    kafka.make_request('add_to_cart', req.body, function(err, results){
        console.log("Inside Add Dish to Cart")
        console.log(req.body)
        if(err) throw err;
        else{
            console.log("Inside else")
            res.writeHead(200, {
                'Content-Type': "application/json"
            })
            res.end("Added to Cart")
        }
    }) 

}