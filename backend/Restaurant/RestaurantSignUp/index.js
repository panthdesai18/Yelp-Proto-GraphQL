const kafka = require('../../kafka/client')

exports.restaurantSignup = function(req,res){
    kafka.make_request('rest_signup', req.body, function(err,results){
        console.log('in result');
        console.log(results);
        if (err){
            console.log("Inside err");
            res.json({
                status:"error",
                msg:"System Error, Try Again."
            })
        }else{
            console.log("Inside else");
                res.end();
            }
        
    });
}

