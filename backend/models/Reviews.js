var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var UserSchema = new Schema({
    reviewno: { type: Number },
    reviewdesc: { type: String },
    restid: { type: String },
    userid: { type: String },
    username: {type: String }
},
{
    collection:"Reviews"
});

var Reviews = mongoose.model("Reviews", UserSchema,"Reviews");
// the last parameter tells the mongodb server which collection to use ie User here
// it is actually redundant here as we've already specified it in the scehma above, so to write
// at one of the two places.
module.exports = Reviews;