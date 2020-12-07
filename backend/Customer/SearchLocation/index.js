const kafka = require('../../kafka/client')

exports.searchLocation = (req,res) =>{
    kafka.make_request('search_location', req.body, function(err, results){
        console.log("Searching Location")
        console.log(req.body)
        if(err) throw err;
        else{
            console.log("Inside else")
            res.writeHead(200, {
                'Content-Type': "application/json"
            })
            console.log(results)
            res.end(JSON.stringify(results))
        }
    })

}