const kafka = require("../../kafka/client")

exports.getFollowingUsers = (req, res) => {
    
    kafka.make_request('get_following_users', req.body, function(err, results){
        console.log("Getting Registered Events")
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