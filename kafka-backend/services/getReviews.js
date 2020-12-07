var Reviews = require('../models/Reviews')

function handle_request(msg,callback){
    console.log(msg)
    console.log("Getting Rest Reviews!")

    Reviews.find({restid: msg.userid}, function(err, result, fields){
        if(err) throw err;
        console.log(result);
        callback(null, result)
        console.log("After Callback!")
    })
}

exports.handle_request = handle_request;