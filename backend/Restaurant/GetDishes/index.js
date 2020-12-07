const { KafkaClient } = require('kafka-node')
const kafka = require('../../kafka/client')

exports.getDishes = (req, res) => {
    kafka.make_request('get_dishes', req.body, function(err, results){
        console.log("Getting Restaurant Dishes")
        console.log(req.body)
        if(err) throw err;
        else{
            console.log("Inside else")
            res.writeHead(200, {
                'Content-Type': 'application/json'
            })
            console.log(results)
            res.end(JSON.stringify(results))
        }
    })  
}