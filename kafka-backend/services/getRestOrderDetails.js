var Orders = require('../models/Orders')

function handle_request(msg,callback){
    console.log(msg)
    console.log("Getting Rest Order Details!")

    Orders.find({restid:msg.userid},function(err,result,fields){
        if(err) throw err;
        console.log("Results is ", result)
        callback(null, result)
        console.log("After Callback")
    })
}

exports.handle_request = handle_request;