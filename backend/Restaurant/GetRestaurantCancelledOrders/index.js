const kafka = require('../../kafka/client')

exports.getRestCancelledOrd =  (req,res) => {

    kafka.make_request('get_rest_cancelled',req.body, function(err, results){
        console.log("Getting All Received Orders")
        if(err) throw err;
        else{
            console.log("Inside else")
            res.writeHead(200, {
                'Content-Type': "application/json"
            })
            console.log(results)
            res.end(JSON.stringify(results))
        }
    } )
}