const { KafkaClient } = require('kafka-node')
const kafka = require('../../kafka/client')

exports.getUserOrders =  (req,res) => {
    kafka.make_request('get_user_orders', req.body, function(err, result){
        console.log("In User Orders!")
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

