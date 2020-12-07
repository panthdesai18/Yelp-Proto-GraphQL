var OrderDetails = require('../models/OrderDetails')
var Orders = require('../models/Orders')

function handle_request(msg,callback){
    console.log(msg)
    console.log("Getting Rest Received Orders!")
    // var user = "SELECT orderid,dishid,quantity from yelp_proto.orderdetails where orderid in (SELECT orderid FROM yelp_proto.order where restid ='"+req.body.userid+"'); ";
    var final = []
    Orders.find({userid:msg.userid,status:"Preparing"},function(err, result1){
        if(err) throw err;
        console.log("RESULTS are:", result1)
        final.push(result1)
        if(result1.length>0){
            OrderDetails.find({orderid:result1[0]._id}, function(err, result2){
                if(err) throw err;
                console.log("RESULTS 2 ARE:", result2)
                final.push(result2)
                callback( null, final)
            })
        }
    })
}

exports.handle_request = handle_request