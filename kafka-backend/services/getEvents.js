var Events = require('../models/Events')

function handle_request(msg,callback){
    console.log(msg)
    console.log("Getting Created Events!")

    Events.find({}, function(err, result, fields){
        if(err) throw err;
        console.log(result);
        callback(null, result)
        console.log("After Callback!")
    })
}

exports.handle_request = handle_request;