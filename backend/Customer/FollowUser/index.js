const kafka = require('../../kafka/client')

exports.followUser = (req,res) =>{
    kafka.make_request('follow_user', req.body, function(err, results){
        console.log("Inside Following User")
        console.log(req.body)
        if(err) throw err;
        else{
            console.log("Inside else")
            res.writeHead(200, {
                'Content-Type': "application/json"
            })
            res.end("User Followed")
        }
    })
    
}