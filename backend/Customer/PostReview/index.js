const kafka = require('../../kafka/client')

exports.postReview = function(req,res){
    kafka.make_request('add_review', req.body, function(err, results){
        console.log("Inside Review Posting")
        console.log(req.body)
        if(err) throw err;
        else{
            console.log("Inside else")
            res.writeHead(200, {
                'Content-Type': "application/json"
            })
            res.end("Review Added!")
        }
    })
    
}