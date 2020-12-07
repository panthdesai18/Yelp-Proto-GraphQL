const pool = require('../../Config')

exports.getSearch = (req,res) =>{
    console.log("GATHERING ALL DATA!")
    console.log(req.boy)
    var user= "SELECT * from dishes WHERE dishname LIKE '"+req.body+"' ";
    pool.query(user,(err,result) => {
        if (err) throw err;
        if(result.length > 0)
        {
            res.writeHead(200,{
                'Content-Type' : 'application/json'
            })
            res.end(JSON.stringify(result))
        }
    })
}