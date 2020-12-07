const kafka = require('../../kafka/client')
exports.searchDish = (req,res) =>{
    kafka.make_request('search_dish', req.body, function(err, results){
        console.log("Searching Dish")
        console.log(req.body)
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
