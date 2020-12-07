var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var UserSchema = new Schema({
    restname: { type: String, required: true },
    email: { type: String, required:true, unique: true },
    zipcode: { type: Number, required: true },
    password:  { type: String, required:true },
    address: { type: String },
    description: { type: String },
    phno: { type: Number },
    typedeliv: { type: Boolean },
    typepickup: { type: Boolean },
    typedinein: { type: Boolean },
    restphoto: { type: String },
    lat: { type: String },
    lng: { type: String },
    restphoto2: { type: String },
    restphoto3: { type: String },
    restphoto4: { type: String }
},
{
    collection:"Restaurant"
});

var Restaurant = mongoose.model("Restaurant", UserSchema,"Restaurant");
// the last parameter tells the mongodb server which collection to use ie User here
// it is actually redundant here as we've already specified it in the scehma above, so to write
// at one of the two places.
module.exports = Restaurant;