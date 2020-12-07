var Reviews = require('../models/Reviews')

function handle_request(msg, callback){
    console.log(msg)
    console.log("Attempting Dish Addition")

    var response_message = ""

    var review = Reviews({
        reviewno: msg.reviewnumber,
        reviewdesc: msg.reviewdesc,
        restid: msg.restid,
        userid: msg.userid
    })

    review.save(function(err,results){
        if(err){
            console.log(err)
            response_message = "Error While Adding dish"
            var pkg = {
                response_message: response_message
            }
            console.log("Error while Adding Review!")
            callback(null, pkg)
        }
        else{
            response_message = "Review Added Successfully"
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