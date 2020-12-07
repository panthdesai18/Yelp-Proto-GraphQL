var Restaurant = require('../models/Restaurant')

function handle_request(msg, callback){
    console.log(msg)
    console.log("Getting Restaurant Data!")

    Restaurant.find({_id : msg.userid}, function(err,result, fields){
        if(err) throw err;
        console.log(result[0])
        callback(null, result[0])
        console.log("After Callback!")
    })
}

exports.handle_request = handle_request;