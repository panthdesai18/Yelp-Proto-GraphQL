var Message = require('../models/Message')

function handle_request(msg, callback){
    console.log(msg)

    console.log("Attempting Event Addition")

    var response_message = ""

    var message = Message({
        chatid :msg.restid + msg.userid,
        message : msg.message,
        side : msg.message_side
        // eventname: msg.eventname,
        // eventdesc: msg.eventdesc,
        // eventlocation: msg.eventlocation,
        // eventhash: msg.eventhash,
        // eventdate: msg.eventdate,
        // restid: msg.userid
    })

    message.save(function(err,results){
        if(err){
            console.log(err)
            response_message = "Error While Adding Message"
            var pkg = {
                response_message: response_message
            }
            console.log("Error while Adding message!")
            callback(null, pkg)
        }
        else{
            response_message = "Message Added Successfully"
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