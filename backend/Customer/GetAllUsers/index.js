const kafka = require('../../kafka/client')

exports.getAllUsers = (req, res) => {

    kafka.make_request('get_all_users', req.body, function(err, results){
        console.log("Getting All Users")
        console.log(req.body)
        if(err) throw err;
        else{
            console.log("Inside else")
            res.writeHead(200, {
                'Content-Type': 'application/json'
            })
            console.log(results)
            res.end(JSON.stringify(results))
        }
    })
    
}