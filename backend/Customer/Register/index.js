const kafka = require('../../kafka/client')

exports.register = (req,res) =>{
    kafka.make_request('register_event', req.body, function(err, results){
        console.log("Inside Event Registeration")
        console.log(req.body)
        if(err) throw err;
        else{
            console.log("Inside else")
            res.writeHead(200, {
                'Content-Type': "application/json"
            })
            res.end("Registered To Event")
        }
    })
    
}