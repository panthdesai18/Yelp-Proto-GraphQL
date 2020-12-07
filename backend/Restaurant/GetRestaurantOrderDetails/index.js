const kafka = require("../../kafka/client")

exports.getRestaurantOrderDetails = (req,res) => {
    kafka.make_request('get_rest_order_details', req.body, function(err, results){
        console.log("In Rest Orders Details!")
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