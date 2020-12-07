// userid
// restid
// status
// ordertype
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var UserSchema = new Schema({
    userid: { type: String },
    restid: { type: String },
    status: { type: String },
    ordertype: { type: String },
},
{
    collection:"Orders"
});

var Orders = mongoose.model("Orders", UserSchema,"Orders");
// the last parameter tells the mongodb server which collection to use ie User here
// it is actually redundant here as we've already specified it in the scehma above, so to write
// at one of the two places.
module.exports = Orders;