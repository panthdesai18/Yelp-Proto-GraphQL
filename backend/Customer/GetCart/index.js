const kafka = require('../../kafka/client')


exports.getCart = (req,res) =>{
    kafka.make_request('get_cart', req.body, function(err, results){
        console.log("Getting Cart Data")
        if(err) throw err;
        else{
            console.log("Inside else")
            res.writeHead(200, {
                'Content-Type': "application/json"
            })
            console.log(results)
            res.end(JSON.stringify(results))
        }
    })
    
}