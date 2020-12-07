const kafka = require('../../kafka/client')

exports.getPickupRestaurant = (req, res) =>{
    kafka.make_request('get_pickup_rest', req.body, function(err, results){
        console.log("Getting All Pick Up Restaurants")
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