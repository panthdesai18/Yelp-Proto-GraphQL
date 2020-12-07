const kafka = require("../../kafka/client")

exports.getEventDetails = (req,res) => {

    kafka.make_request('get_registered_users', req.body, function(err, results){
        console.log("Getting Registered Users")
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