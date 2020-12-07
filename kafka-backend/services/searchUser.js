var User = require('../models/User')

function handle_request(msg, callback){
    console.log(msg)
    console.log("Searching User!")
    
    User.find({$or:[{firstname : msg.searchUser} , {nickname : msg.searchUser}]}, function(err, result, fields){
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