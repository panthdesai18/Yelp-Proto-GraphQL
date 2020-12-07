var FollowData = require('../models/FollowData')
var Users = require('../models/User')

function handle_request(msg,callback){
    console.log(msg)
    console.log("Getting Registered Users!")

    FollowData.find({userid:msg.userid}, {followingid: 1}, function(err, result, fields){
        var result2 = []
        if(err) throw err;
        console.log("Following Users are:", result)
        var count = 0;
        for( var i =0; i< result.length; i++){
            Users.find({_id:result[i].followingid}, function(err,result1,field){
                if(err) throw err;
                result2.push(result1)
                if(count == result.length-1){
                    console.log("Registered Users are :", result2)
                    callback(null, result2)
                }
                else{
                    count++;
                }
            })
        }
    })

}

exports.handle_request = handle_request;