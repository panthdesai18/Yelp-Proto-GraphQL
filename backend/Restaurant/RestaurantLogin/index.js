const kafka = require('../../kafka/client')

exports.restaurantLogin = function(req,res){
    kafka.make_request('rest_login', req.body, function(err, results){
        console.log('In Restaurant Login!')
        console.log(results)
        if(err){
            console.log("Inside Error!")
            res.json({
                status: "error",
                msg: "System Error, Try Again."
            })
        }
        else{
            console.log("Inside else")
            res.writeHead(200,{
                'Content-Type' : 'application/json'
            })
            res.end(JSON.stringify(results.user_id))
        }
    });
}
