const kafka = require('../../kafka/client')

exports.searchEvent = (req,res) =>{
    kafka.make_request('search_event', req.body, function(err, results){
        console.log("Getting Searched Event")
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