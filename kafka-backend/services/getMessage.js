var Message = require('../models/Message')

function handle_request(msg,callback){
    console.log(msg)
    console.log("Getting Messages!")

    Message.find({}, function(err, result, fields){
        if(err) throw err;
        console.log(result);
        callback(null, result)
        console.log("After Callback!")
    })
}

exports.handle_request = handle_request;