var Cart = require('../models/Cart')

function handle_request(msg, callback){
    console.log(msg)
    console.log("Attempting Adding to Cart")

    var response_message = ""

    var cart = Cart({
        userid: msg.userid,
        restid: msg.restid,
        dishid: msg.dishid,
        quantity: msg.quantity
    })

    cart.save(function(err,results){
        if(err){
            console.log(err)
            response_message = "Error While Adding to Cart"
            var pkg = {
                response_message: response_message
            }
            console.log("Error while Adding Dish to Cart!")
            callback(null, pkg)
        }
        else{
            response_message = "Dish Added Successfully to Cart"
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