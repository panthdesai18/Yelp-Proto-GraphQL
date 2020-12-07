var mysql = require('mysql');
const mongoose = require('mongoose')

const uri = "mongodb+srv://root:18january@yelp-proto.skcwr.mongodb.net/yelp-proto?retryWrites=true&w=majority"

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("MongoDB Connected!")
})
.catch(err => console.log(err))

module.exports = mongoose

var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '18january',
    database : 'yelp_proto'
});

pool.getConnection(function(err){
    if(!err) {
        console.log("Database is connected ... nn");
    } else {
        console.log("Error connecting database ... nn");
    }
});

module.exports = pool