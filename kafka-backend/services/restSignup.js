const mongo = require('../Connections')
var Restaurant = require('../models/Restaurant')
const saltRounds = 10;
const bcrypt = require('bcrypt');

function handle_request(msg, callback){
    console.log(msg),
    console.log("Inside Restaurant Signup!")

    var exists = false;
    var response_message = "";

    var rest = Restaurant({
        restname: msg.restname,
        email: msg.username,
        zipcode: msg.location,
    })

    Restaurant.find({}, function(err, result){
        if(err) throw err;
        console.log(result);
        console.log(msg.username)

        for( var i =0; i<result.length;i++){
            if(msg.username == result[i].email){
                exists = true;
                break;
            }
        }
        console.log(exists);
        if(exists){
            response_message = "Restaurant Already Exists!"
            var pkg = {
                response_message : response_message
            }
            callback(null, pkg)
        }
        else{
            bcrypt.hash(msg.password, saltRounds, function(err, hash){
                rest.password= hash;
                rest.save(function(err, results){
                    if(err){
                        console.log(err);
                        response_message = "Error While Restaurant Signup!"
                        var pkg = {
                            response_message : response_message
                        }
                        callback(null, pkg)
                    }
                    else{
                        response_message = "Restaurant Added Successfully!"

                        var pkg = {
                            response_message: response_message
                        }
                        callback(null, pkg)
                    }
                })
            })
        }
        console.log("After Callback!")
    })
}

exports.handle_request = handle_request;
