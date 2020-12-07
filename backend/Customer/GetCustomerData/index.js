const kafka = require('../../kafka/client')

exports.getCustomerData = (req, res) => {
    
    kafka.make_request('get_cust_data', req.body, function(err, results){
        console.log("In Cust Profile!")
        console.log(req.body)
        if(err) throw err;
        else{
            console.log("Inside Else")
            res.writeHead(200, {
                'Content-Type': "application/json"
            })
            console.log(results)
            res.end(JSON.stringify(results))
        }
    })
    
}