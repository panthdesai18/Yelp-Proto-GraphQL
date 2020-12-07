var Restaurant = require('../models/Restaurant')

function handle_request(msg, callback){
    console.log(msg)
    console.log("Getting Restaurant Coordinates!")

    Restaurant.find({}, {lat:1,lng:1}, function(err,result, fields){
        if(err) throw err;
        console.log(result)
        callback(null, result)
        console.log("After Callback!")
    })
}

exports.handle_request = handle_request;