var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var UserSchema = new Schema({
    eventname: { type: String },
    eventdesc: { type: String },
    eventlocation: { type: String },
    restid: { type: String },
    eventhash: {type: String },
    eventdate: { type: Date }
},
{
    collection:"Events"
});

var Events = mongoose.model("Events", UserSchema,"Events");
// the last parameter tells the mongodb server which collection to use ie User here
// it is actually redundant here as we've already specified it in the scehma above, so to write
// at one of the two places.
module.exports = Events;
