const pool = require('../../Config')

exports.getRestName = (req,res) =>{
    console.log("Getting Rest Name!")
    console.log(req.body)
    var user = "SELECT restname from restaurant WHERE userid='"+req.body.restid+"'";
    pool.query(user, (err, result) => {
        if (err) throw err;
        if(result.length > 0)
        {
            res.writeHead(200,{
                'Content-Type' : "application/json"
            })
            res.end(JSON.stringify(result))
        }
    })
}