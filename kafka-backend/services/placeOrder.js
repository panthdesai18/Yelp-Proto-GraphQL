var Cart = require('../models/Cart');
var Orders = require('../models/Orders')
var OrderDetails = require('../models/OrderDetails')

function handle_request(msg, callback){
    console.log(msg)
    console.log("Attempting Order Placing!")
    Cart.find({}, function(err, result, fields){
        if(err) throw err;
        var count = 0;
        console.log("Result is :", result)
        var order = Orders({
            userid: msg.userid,
            restid: result[0].restid,
            status: "Order Received",
            ordertype: "Delivery"
        })
        order.save(function(err,result1){
            if(err){
                console.log(err)
                response_message = "Error While Placing Order"
                var pkg = {
                    response_message: response_message
                }
                console.log("Error while Adding Review!")
            }
            else{
                response_message = "Order Added Successfully"
                var pkg = {
                    response_message: response_message
                }
                console.log("NEW CREATED ORDER IS:", result1)
                for(var i = 0; i < result.length; i++){
                    var orderDetails = OrderDetails({
                        orderid:result1._id,
                        dishid:result[i].dishid,
                        quantity:1
                    })
                    
                    console.log("ORDER DETAILS ARE:", orderDetails)
                    orderDetails.save(function(err,result2){
                        if(err){
                            console.log(err)
                            response_message = "Error While Adding Order Details"
                            var pkg = {
                                response_message: response_message
                            }
                        }
                        else{
                            response_message= "Order Details Added Successfully!"
                            var pkg = {
                                response_message: response_message
                            }
                            
                        }
                    })
                    count++;
                }
                console.log(response_message)
            }
        })
    })
    Cart.remove({}, function(err, result){
        if(err) throw err;
        else{
            response_message = "Order Placed Successfully"
            var pkg = {
                response_message : "response_message"
            }
            callback(null,pkg)
        }
    })


}

exports.handle_request = handle_request