var Dishes = require('../models/Dishes')

function handle_request(msg, callback){
    console.log(msg)
    console.log("Attempting Dish Addition")

    var response_message = ""

    var dish = Dishes({
        dishname: msg.dishname,
        category: msg.category,
        price: msg.dishPrice,
        description: msg.dishdescription,
        mainingre: msg.mainingre,
        restid: msg.userid
    })

    dish.save(function(err,results){
        if(err){
            console.log(err)
            response_message = "Error While Adding dish"
            var pkg = {
                response_message: response_message
            }
            console.log("Error while Adding Dish!")
            callback(null, pkg)
        }
        else{
            response_message = "Dish Added Successfully"
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