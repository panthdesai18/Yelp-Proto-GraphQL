const kafka = require('../../kafka/client')

exports.getReview = (req, res) => {

    kafka.make_request('get_reviews', req.body, function(err, results){
        console.log("In Rest Reviews!")
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