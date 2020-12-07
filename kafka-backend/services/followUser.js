var FollowData = require('../models/FollowData')

function handle_request(msg, callback){
    console.log(msg)
    console.log("Attempting Following User")

    var followData = FollowData({
        followingid: msg.followingid,
        userid: msg.userid,
    })

    followData.save(function(err,results){
        if(err){
            console.log(err)
            response_message = "Error while following user"
            var pkg = {
                response_message: response_message
            }
            console.log("Error while following user!")
            callback(null, pkg)
        }
        else{
            response_message = "User followed!"
            var pkg = {
                response_message: response_message
            }
            console.log(response_message)
            callback(null, pkg)
        }

    })
    console.log("After Callback!")
}

exports.handle_request = handle_request