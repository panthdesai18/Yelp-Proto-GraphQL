const kafka = require('../../kafka/client')

exports.getRestOutDeliveryOrd = (req,res) => {

    kafka.make_request('get_rest_out_delivery', req.body, function(err, results){
        console.log("Getting All Out for Delivery Orders")
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