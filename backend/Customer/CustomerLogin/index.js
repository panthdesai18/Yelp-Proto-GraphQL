const pool = require('../../Config')
const bcrypt = require('bcrypt')
var kafka = require('../../kafka/client')

exports.customerLogin = function(req, res) {
    kafka.make_request('user_login', req.body, function(err, results){
        console.log('In User Login!')
        console.log(results)
        if(err){
            console.log("Inside Error!")
            res.json({
                status: "error",
                msg: "System Error, Try Again."
            })
        }
        else{
            console.log("Inside else")
            res.writeHead(200,{
                'Content-Type' : 'application/json'
            })
            res.end(JSON.stringify(results.user_id))
        }
    });
}