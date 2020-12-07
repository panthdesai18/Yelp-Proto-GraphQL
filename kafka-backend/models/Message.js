var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var UserSchema = new Schema({
    chatid: { type: String},
    side: { type: String },
    message: { type: String}
},
{
    collection:"Message"
});

var Message = mongoose.model("Message", UserSchema,"Message");
// the last parameter tells the mongodb server which collection to use ie User here
// it is actually redundant here as we've already specified it in the scehma above, so to write
// at one of the two places.
module.exports = Message;