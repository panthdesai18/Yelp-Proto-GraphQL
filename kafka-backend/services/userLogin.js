var Users = require('../models/User')
const saltRounds = 10;
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
var passport = require('passport')

function handle_request(msg, callback){
    console.log(msg)
    console.log("Attempting User Login")
    var uname = "";
    var found = false;

    Users.find({}, function(err, result, fields){
        if(err) throw err;
        var response_message = "";
        let user_data = result;
        let flag = false;
        let passwordinDb = "";

        user_data.forEach(element => {
            if(msg.username == element.email)
            flag = true;
            uname = element.name;
            passwordinDb = element.password;
        })
        console.log(passwordinDb);
        bcrypt.compare(msg.password, passwordinDb, function(err, resp){
            if(resp){
                response_message = "Customer Login Successful!";
            }
            else{
                response_message = "Login Failed!"
            }
            var token={
                email: msg.username,
                user: "user"
            }
            var pkg = {
                response_message: response_message,
                user_id: result[0]._id
            }
            callback(null, pkg)
        })
        console.log("After Callback!")
    })

}

exports.handle_request = handle_request;