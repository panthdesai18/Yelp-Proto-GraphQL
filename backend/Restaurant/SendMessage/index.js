const kafka = require('../../kafka/client')


exports.sendMessage = (req,res) => {
    kafka.make_request('send_message', req.body, function(err, result){
        console.log("Sending New Message!")
        console.log(req.body)
        if(err) throw err;
        else{
            console.log("Inside Else")
            res.writeHead(200, {
                'Content-Type': "application/json"
            })
            res.end("Event Added!")
        }
    })
    
}