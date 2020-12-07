var Events = require('../models/Events')

function handle_request(msg, callback){
    console.log(msg)
    console.log("Attempting Event Addition")

    var response_message = ""

    var event = Events({
        eventname: msg.eventname,
        eventdesc: msg.eventdesc,
        eventlocation: msg.eventlocation,
        eventhash: msg.eventhash,
        eventdate: msg.eventdate,
        restid: msg.userid
    })

    event.save(function(err,results){
        if(err){
            console.log(err)
            response_message = "Error While Adding Event"
            var pkg = {
                response_message: response_message
            }
            console.log("Error while Adding Event!")
            callback(null, pkg)
        }
        else{
            response_message = "Event Added Successfully"
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