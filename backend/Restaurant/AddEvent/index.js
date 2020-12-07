const kafka = require('../../kafka/client')


exports.addEvent = (req,res) => {
    kafka.make_request('add_event', req.body, function(err, result){
        console.log("Adding New Event!")
        console.log(req.body)
        if(err) throw err;
        else{
            console.log("Inside Else")
            res.writeHead(200, {
                'Content-Type': "application/json"
            })
            res.end("Event Added!")
        }
    })

    
}