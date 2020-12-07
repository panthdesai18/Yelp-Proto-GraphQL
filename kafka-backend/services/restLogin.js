var Restaurant = require('../models/Restaurant')
const saltRounds = 10;
const bcrypt = require('bcrypt')

function handle_request(msg, callback){
    console.log(msg)
    console.log("Attempting Restaurant Login")
    var uname = "";
    var found = false;

    Restaurant.find({}, function(err, result, fields){
        if(err) throw err;
        console.log("_____________",JSON.stringify(result))
        var response_message = "";
        let rest_data = result;
        let flag = false;
        let passwordinDb = "";

        rest_data.forEach(element => {
            if(msg.username == element.email)
            flag = true;
            uname = element.name;
            passwordinDb = element.password;
        })
        console.log(passwordinDb);
        bcrypt.compare(msg.password, passwordinDb, function(err, resp){
            if(resp){
                response_message = "Restaurant Login Successful!";
            }
            else{
                response_message = "Login Failed!"
            }
            var token={
                email: msg.username,
                user: "restaurant"
            }
            var pkg = {
                response_message: response_message,
                user_id: result[0]._id,
            }
            callback(null, pkg)
        })
        console.log("After Callback!")
    })

}

exports.handle_request = handle_request;