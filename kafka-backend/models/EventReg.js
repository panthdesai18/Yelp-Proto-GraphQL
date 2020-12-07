var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var UserSchema = new Schema({
    userid: { type: String },
    eventid: { type: String}
},
{
    collection:"Eventreg"
});

var Eventreg = mongoose.model("Eventreg", UserSchema,"Eventreg");
// the last parameter tells the mongodb server which collection to use ie User here
// it is actually redundant here as we've already specified it in the scehma above, so to write
// at one of the two places.
module.exports = Eventreg;