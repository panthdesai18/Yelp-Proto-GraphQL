const kafka = require('../../kafka/client')

exports.getCoordinates = (req,res) =>{
    kafka.make_request('get_coordinates', req.body, function(err, result){
        console.log("Getting All Coordinates")
        if(err) throw err;
        else{
            console.log("Inside else")
            res.writeHead(200, {
                'Content-Type': "application/json"
            })
            console.log(result)
            res.end(JSON.stringify(result))
        }
    })
}