var Restaurant = require('../models/Restaurant')
var Dishes = require('../models/Dishes')

function handle_request(msg, callback){
    console.log(msg)
    console.log("Searching Dish!")

    Dishes.find({dishname: msg.searchLocation}, function(err,result, fields){
        if(err){
            callback(null, "")
        }
        else if(result.length == 0){
            callback(null, "")
        }
        else{
            Restaurant.find({_id:result[0].restid}, function(err, result1, fields){
            if(err)
                {
                    callback(null, "")
                }
            console.log(result1)
            callback(null, result1)
        })
    }
        
        // callback(null, result)
        // console.log("After Callback!")
    })
}

exports.handle_request = handle_request;