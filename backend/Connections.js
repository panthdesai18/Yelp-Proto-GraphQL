const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

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