const kafka = require('../../kafka/client')

exports.placeOrder = (req,res) =>{
    kafka.make_request('place_order', req.body, function(err, results){
        console.log("Inside Placing Order")
        console.log(req.body)
        if(err) throw err;
        else{
            console.log("Inside else")
            res.writeHead(200, {
                'Content-Type': "application/json"
            })
            res.end("Order Placed!")
        }
    })

}