var Events = require('../models/Events')

function handle_request(msg, callback){
    console.log(msg)
    console.log("Searching Event!")
    
    Events.find({eventname: msg.searchEvent}, function(err, result, fields){
        if(err){
            callback(null, "")
        }
        else{
            console.log(result)
            callback(null, result)
        }
    })
}

exports.handle_request = handle_request;