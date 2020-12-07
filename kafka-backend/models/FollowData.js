var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var UserSchema = new Schema({
    userid: { type: String },
    followingid: { type: String}
},
{
    collection:"FollowData"
});

var FollowData = mongoose.model("FollowData", UserSchema,"FollowData");
// the last parameter tells the mongodb server which collection to use ie User here
// it is actually redundant here as we've already specified it in the scehma above, so to write
// at one of the two places.
module.exports = FollowData;