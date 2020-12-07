const pool = require('../../Config')

exports.updateCoordinates = (req,res) => {
    console.log("UPDATING COORDINATES!")
    console.log(req.body.coord)
    var user = "UPDATE yelp_proto.restaurant SET lat = '"+req.body.coord.lat+"', lng = '"+ req.body.coord.lng+"' WHERE userid = '"+req.body.userid+"'";
    pool.query(user, function(err,result, fields){
        if(err) throw err;
        console.log(result)
        if(err){
            res.writeHead(400,{
                'Content-Type' : 'text/plain'
            })
        }
        else{
            console.log("no error")
            res.writeHead(200,{
                'Content-Type' : 'application/json'
            })
            res.end("Event registered!")
        }
    })
}