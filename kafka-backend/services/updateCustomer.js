var Users = require('../models/User')

function handle_request(msg, callback){
    console.log(msg)
    console.log("Inside Update User!")
    
    var newvalues = {
        $set: { nickname: msg.nickname, headline: msg.headline, address: msg.address, city: msg.city, state: msg.state, country:msg.country, ilove:msg.ilove } 
    }

    Users.updateOne({_id:msg.userid}, newvalues, function(err, result){
        if(err) throw err;
        var response_message = "Customer Profile Updated!"

        var pkg = {
            response_message: response_message
        }

        callback(null, pkg)
    })
//     var exists = false;
//     var response_message = "";

//     var user = Users({
//         firstname: msg.firstname,
//         lastname: msg.lastname,
//         email: msg.username,
//         zipcode: msg.location,
//     })

//     Users.find({}, function(err, result){
//         if(err) throw err;
//         console.log(result);
//         console.log(msg.username)

//         for(var i =0; i< result.length;i++){
//             if(msg.username == result[i].email){
//                 exists = true;
//                 break;
//             }
//         }
//         console.log(exists);
//         if(exists){
//             response_message = "Email Already Exists!";
//             var pkg = {
//                 response_message: response_message
//             }
//             callback( null, pkg)
//         }
//         else{
//             bcrypt.hash(msg.password, saltRounds, function(err, hash){
//                 user.password = hash;
//                 user.save(function(err, results){
//                     if(err){
//                         console.log(err);
//                         response_message = "Error While Signing Up!"

//                         var pkg = {
//                             response_message: response_message
//                         }
//                         callback(null, pkg)
//                     }
//                     else{
//                         response_message = "User Added Successfully!"

//                         var pkg = {
//                             response_message: response_message
//                         }
//                         callback(null, pkg);
//                     }
//                 })
//             })
//         }
//         console.log("After Callback!")
//     })
// }

// function handle_request(msg, callback){
   
//     console.log("Inside book kafka backend");
//     console.log(msg);

//     callback(null, {code:200})
//     console.log("after callback");
};

exports.handle_request = handle_request;

