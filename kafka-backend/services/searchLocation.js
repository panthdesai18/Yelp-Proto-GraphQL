var Restaurant = require('../models/Restaurant')
var Dishes = require('../models/Dishes')

function handle_request(msg, callback){
    console.log(msg)
    console.log("Searching Location!")
    
    Restaurant.find({restname: msg.searchLocation}, function(err,result, fields){
        if(err){
            callback(null, "")
        }
        else{
            console.log(result)
            callback(null, result)
        }
        // console.log("After Callback!")
    })
}

exports.handle_request = handle_request;