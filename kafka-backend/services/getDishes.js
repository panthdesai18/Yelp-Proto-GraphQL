var Dishes = require('../models/Dishes')

function handle_request(msg,callback){
    console.log(msg)
    console.log("Getting Dish Data!")

    Dishes.find({restid: msg.userid}, function(err, result, fields){
        if(err) throw err;
        console.log(result);
        callback(null, result)
        console.log("After Callback!")
    })
}

exports.handle_request = handle_request;