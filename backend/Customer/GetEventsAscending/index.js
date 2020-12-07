const kafka = require('../../kafka/client')

exports.getEventsAscending = (req, res) => {

    kafka.make_request('get_events_asc', req.body, function(err, results){
        console.log("Getting All Events")
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