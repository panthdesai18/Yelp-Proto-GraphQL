const kafka = require('../../kafka/client')

exports.getRestaurantOrders = (req,res) =>{
    kafka.make_request('get_rest_orders', req.body, function(err, results){
        console.log("In Rest Orders!")
        console.log(req.body)
        if(err) throw err;
        else{
            console.log("Inside Else")
            res.writeHead(200, {
                'Content-Type': "application/json"
            })
            console.log(results)
            res.end(JSON.stringify(results))
        }
    })
    
}