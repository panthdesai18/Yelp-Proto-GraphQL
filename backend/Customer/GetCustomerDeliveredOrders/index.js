const kafka = require('../../kafka/client')

exports.getCustDeliveredOrd = (req,res) => {

    kafka.make_request('get_cust_delivered', req.body, function(err, result){
        console.log("In Cust Delivered Orders!")
        console.log(req.body)
        if(err) throw err;
        else{
            console.log("Inside Else")
            res.writeHead(200, {
                'Content-Type': "application/json"
            })
            console.log(result)
            res.end(JSON.stringify(result))
        }
    })
}