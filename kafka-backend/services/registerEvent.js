var EventReg = require('../models/EventReg')

function handle_request(msg, callback){
    console.log(msg)
    console.log("Attempting Adding to Cart")

    var response_message = ""

    var eventreg = EventReg({
        userid: msg.userid,
        eventid: msg.eventid,
    })

    eventreg.save(function(err,results){
        if(err){
            console.log(err)
            response_message = "Error While Registering to Event"
            var pkg = {
                response_message: response_message
            }
            console.log("Error while Registering to Event!")
            callback(null, pkg)
        }
        else{
            response_message = "Registered to Event!"
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