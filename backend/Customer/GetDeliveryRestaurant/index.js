const kafka = require('../../kafka/client')

exports.getDeliveryRestaurant = (req, res) => {
    kafka.make_request('get_deliv_rest', req.body, function(err, results){
        console.log("Getting All Delivery Restaurants")
        if(err) throw err;
        else{
            console.log("Inside else")
            res.writeHead(200, {
                'Content-Type': "application/json"
            })
            console.log(results)
            res.end(JSON.stringify(results))
        }
        
    })
}