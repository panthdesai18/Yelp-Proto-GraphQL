var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var UserSchema = new Schema({
    restid: { type: String },
    dishname: { type: String },
    mainingre: { type: String },
    price: { type: Number },
    description: { type: String },
    category: { type: String },
    dishphoto: { type: String },
},
{
    collection:"Dishes"
});

var Dishes = mongoose.model("Dishes", UserSchema,"Dishes");
// the last parameter tells the mongodb server which collection to use ie User here
// it is actually redundant here as we've already specified it in the scehma above, so to write
// at one of the two places.
module.exports = Dishes;