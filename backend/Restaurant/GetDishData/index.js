const kafka = require('../../kafka/client')

exports.getDishData = (req, res) => {
    kafka.make_request('get_dish_data', req.body, function(err, results){
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