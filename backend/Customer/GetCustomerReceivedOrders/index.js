const kafka = require('../../kafka/client')

exports.getCustReceivedOrd = (req,res) => {

    kafka.make_request('get_cust_received', req.body, function(err, result){
        console.log("In Cust Received Orders!")
        console.log(req.body)
        if(err) throw err;
        else{
            console.log("Inside Else")
            res.writeHead(200, {
                'Content-Type': "application/json"
            })
            console.log(result)
            res.end(JSON.stringify(result))
        }
    })
}