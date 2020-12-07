const kafka = require("../../kafka/client")

exports.getMessage = (req,res) => {

    kafka.make_request('get_message', req.body, function(err, results){
        console.log("Getting Messages")
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