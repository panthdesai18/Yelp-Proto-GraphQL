var Users = require('../models/User')

function handle_request(msg,callback){
    console.log(msg)
    console.log("Getting All Users!")

    Users.find({_id:{$ne:msg.userid}}, function(err, result, fields){
        if(err) throw err;
        console.log(result);
        callback(null, result)
        console.log("After Callback!")
    })
}

exports.handle_request = handle_request;