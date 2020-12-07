var Restaurant = require('../models/Restaurant')

function handle_request(msg, callback){
    console.log(msg)
    console.log("Updating Restaurant!")

    var newvalues = {
        $set: { address: msg.address, description: msg.description, phno: msg.phno, typedeliv:true, typepickup:true, typedinein:true } 
    }

    Restaurant.updateOne({_id:msg.userid}, newvalues, function(err, result){
        if(err) throw err;
        var response_message = "Restaurant Profile Updated!"

        var pkg = {
            response_message: response_message
        }

        callback(null, pkg)
    })
}

exports.handle_request = handle_request;