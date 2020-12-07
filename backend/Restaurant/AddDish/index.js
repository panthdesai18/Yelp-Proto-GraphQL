const kafka = require('../../kafka/client')

exports.addDish = function(req,res){
    kafka.make_request('add_dish', req.body, function(err, results){
        console.log("Inside Add Dish")
        console.log(req.body)
        if(err) throw err;
        else{
            console.log("Inside else")
            res.writeHead(200, {
                'Content-Type': "application/json"
            })
            res.end("Dish Inserted")
        }
    })    
    
}