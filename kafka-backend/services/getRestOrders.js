var OrderDetails = require('../models/OrderDetails')
var Orders = require('../models/Orders')

function handle_request(msg,callback){
    console.log(msg)
    console.log("Getting Rest Orders!")
    // var user = "SELECT orderid,dishid,quantity from yelp_proto.orderdetails where orderid in (SELECT orderid FROM yelp_proto.order where restid ='"+req.body.userid+"'); ";
    var final = []
    var count = 0;
    Orders.find({restid: msg.userid}, function(err, result, fields){
        if(err) throw err;
        for(var i = 0 ; i < result.length ; i++){
            OrderDetails.find({orderid:result[i]._id}, function(err,result1,fields){
                if(err) throw err;
                final.push(result1);
                if(count == result.length -1){
                    console.log("FINAL IS:",final);
                    callback(null, final)
                }
                else{
                    count++;
                }
            })
        }
        
    })
}

exports.handle_request = handle_request;