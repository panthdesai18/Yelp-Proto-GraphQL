const pool = require('../../Config')

exports.getDishName = (req,res) => {
    console.log("Getting dish image")
    console.log(req.body)
    var user = "SELECT dishname, dishphoto from dishes WHERE dishid = "+req.body.dishid+"";
    pool.query(user, function (err, result, fields){
        if (err) {
            res.writeHead(404,{
                'Content-Type' : "text/plain"
            })
            res.end("Error")
        }
        if(result.length > 0)
        {
            res.writeHead(200,{
                'Content-Type' : "application/json"
            })
            res.end(JSON.stringify(result))
        }
    })
}