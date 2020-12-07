var Orders = require('../models/Orders')

function handle_request(msg, callback){
    console.log(msg)
    console.log("In Updating Order Status")
    var newvalues = {
        $set: { status: msg.status } 
    }
    Orders.update({_id:msg.orderid}, newvalues, function(err, results){
        if(err) throw err;
        var response_message = "Order Status Updated"

        var pkg = {
            response_message: response_message
        }

        callback(null, pkg)
    })
}

exports.handle_request = handle_request