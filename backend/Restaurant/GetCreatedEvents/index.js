const kafka = require('../../kafka/client')

exports.getCreatedEvents = (req, res) => {
    kafka.make_request('view_created_events', req.body, function(err, results){
        console.log("Getting Restaurant Events")
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