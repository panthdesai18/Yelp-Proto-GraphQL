var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var session = require('express-session');
var cookieParser = require('cookie-parser');
const schema = require('./schema/schema');
const { graphqlHTTP } = require('express-graphql');
var cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var multer = require('multer');
var path = require('path');
const e = require('express');
const Database = require('./Connections')
var User = require('./models/User')
var Dishes = require('./models/Dishes')
var Restaurant = require('./models/Restaurant')
const { customerSignup } = require('./Customer/CustomerSignup');
const { restaurantSignup } = require('./Restaurant/RestaurantSignUp');
const { customerLogin } = require('./Customer/CustomerLogin');
const { restaurantLogin } = require('./Restaurant/RestaurantLogin');
const { updateCustomer } = require('./Customer/UpdateCustomer');
const { getCustomerData } = require('./Customer/GetCustomerData');
const { getRestaurantData } = require('./Restaurant/GetRestaurantData');
const { getDishData } = require('./Restaurant/GetDishData');
const { getDishes } = require('./Restaurant/GetDishes');
const { getSearch } = require('./Customer/GetSearch');
const { getAllRestaurants } = require('./Customer/GetAllRest');
const { getDeliveryRestaurant } = require('./Customer/GetDeliveryRestaurant');
const { getPickupRestaurant } = require('./Customer/GetPickupRestaurant');
const { getDineInRestaurants } = require('./Customer/GetDineInRestaurant');
const { addDish } = require('./Restaurant/AddDish');
const { updateRestaurant } = require('./Restaurant/UpdateRestaurant');
const { postReview } = require('./Customer/PostReview');
const { getReview } = require('./Restaurant/GetReview');
const { addEvent } = require('./Restaurant/AddEvent');
const { getEvents } = require('./Customer/GetEvents');
const { getRegisteredEvents } = require('./Customer/GetRegisteredEvents');
const { updateCoordinates } = require('./Restaurant/UpdateCoordinates');
const { register } = require('./Customer/Register');
const { searchLocation } = require('./Customer/SearchLocation');
const { searchEvent } = require('./Customer/SeachEvent');
const { getCoordinates } = require('./Customer/GetCoordinates');
const { searchDish } = require('./Customer/SearchDish');
const { addToCart } = require('./Customer/AddToCart');
const { getDishName } = require('./Restaurant/GetDishName');
const { getCart } = require('./Customer/GetCart');
const { placeOrder } = require('./Customer/PlaceOrder');
const { getRestName } = require('./Restaurant/GetRestName');
const { getRestaurantOrders } = require('./Restaurant/GetRestOrders');
const { getRestaurantOrderDetails } = require('./Restaurant/GetRestaurantOrderDetails');
const { getUserOrders } = require('./Customer/GetUserOrders');
const { getUserOrderDetails } = require('./Customer/GetUserOrderDetails');
const { updateOrderStatus } = require('./Restaurant/UpdateOrderStatus');
const { getRestDeliveredOrd } = require('./Restaurant/GetRestaurantDeliveredOrders');
const { getCustDeliveredOrd } = require('./Customer/GetCustomerDeliveredOrders');
const { getRestReceivedOrd } = require('./Restaurant/GetRestaurantReceivedOrders');
const { getCustReceivedOrd } = require('./Customer/GetCustomerReceivedOrders');
const { getRestPreparingOrd } = require('./Restaurant/GetRestaurantPreparingOrders');
const { getCustPreparingOrd } = require('./Customer/GetCustomerPreparingOrders');
const { getRestOutDeliveryOrd } = require('./Restaurant/GetRestaurantOutDeliveryOrders');
const { getCustOutDeliveryOrd } = require('./Customer/GetCustomerOutDeliveryOrders');
const { getRestCancelledOrd } = require('./Restaurant/GetRestaurantCancelledOrders');
const { getCustCancelledOrd } = require('./Customer/GetCustomerCancelledOrders');
const { getCreatedEvents } = require('./Restaurant/GetCreatedEvents');
const { getEventDetails } = require('./Restaurant/GetEventDetails');
const { getEventRegisteredUsers } = require('./Restaurant/GetEventRegisteredUser');
const { getAllUsers } = require('./Customer/GetAllUsers')
const { followUser } = require('./Customer/FollowUser')
const { getFollowingUsers } = require('./Customer/GetFollowingUsers')
const { searchUser } = require('./Customer/SearchUser')
const { sendMessage } = require('./Restaurant/SendMessage')
const { getMessage } = require('./Restaurant/GetMessage')
const { getEventsAscending } = require('./Customer/GetEventsAscending')
const { getEventsDescending } = require('./Customer/GetEventsDescending')

module.exports = app;
app.use(express.static('public'))

app.set('view engine', 'ejs');

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(bodyParser.json());

var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '18january',
    database : 'yelp_proto'
});

app.use("/graphql", graphqlHTTP({
  schema,
  graphiql: true
}));

pool.getConnection(function(err){
    if(!err) {
        console.log("Database is connected ... nn");
    } else {
        // console.log("Error connecting database ... nn");
    }
});

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.post("/signUp", customerSignup);
app.post("/restsignup", restaurantSignup);
app.post('/login', customerLogin);
app.post('/reslogin', restaurantLogin);
app.post("/updateCust", updateCustomer);
app.post("/getUserData", getCustomerData)
app.post("/getRestData", getRestaurantData)
app.post("/getDishData", getDishData)
app.post("/getDishes", getDishes)
app.post("/getSearch", getSearch)
app.post("/getallRest", getAllRestaurants)
app.post("/getDelivRest", getDeliveryRestaurant)
app.post("/getPickup", getPickupRestaurant)
app.post("/getDineIn", getDineInRestaurants)
app.post("/addDish", addDish);
app.post("/updateRest", updateRestaurant);
app.post("/postReview", postReview);
app.post("/getReview", getReview)
app.post("/addEvent", addEvent)
app.post("/getEvents", getEvents)
app.post("/getRegisteredEvents", getRegisteredEvents)
app.post("/updateCoordinates", updateCoordinates)
app.post("/register", register)
app.post("/searchLocation", searchLocation)
app.post("/searchEvent", searchEvent)
app.post("/getCoordinates", getCoordinates)
app.post("/searchDish", searchDish)
app.post("/addToCart", addToCart)
app.post("/getdishname", getDishName)
app.get("/getCart", getCart)
app.post("/placeOrder", placeOrder)
app.post("/getrestname", getRestName)
app.post("/getRestOrders", getRestaurantOrders)
app.post("/getRestOrderDetails", getRestaurantOrderDetails)
app.post("/getUserOrders", getUserOrders)
app.post("/getUserOrderDetails", getUserOrderDetails)
app.post("/updateOrderStatus", updateOrderStatus)
app.post("/getRestDelivered", getRestDeliveredOrd)
app.post("/getCustDelivered", getCustDeliveredOrd)
app.post("/getRestReceived", getRestReceivedOrd)
app.post("/getCustReceived", getCustReceivedOrd)
app.post("/getRestPreparing", getRestPreparingOrd)
app.post("/getCustPreparing", getCustPreparingOrd)
app.post("/getRestOutDelivery", getRestOutDeliveryOrd)
app.post("/getCustOutDelivery", getCustOutDeliveryOrd)
app.post("/getRestCancelled", getRestCancelledOrd)
app.post("/getCustCancelled", getCustCancelledOrd)
app.post("/getCreatedEvents", getCreatedEvents)
app.post("/getEventDetails", getEventDetails)
app.post("/getEventRegisteredUser", getEventRegisteredUsers)
app.post("/getAllUsers", getAllUsers)
app.post("/followUser", followUser)
app.post("/getFollowingUsers", getFollowingUsers)
app.post("/searchUser", searchUser)
app.post("/sendMessage", sendMessage)
app.post("/getMessage", getMessage)
app.post("/getEventsAscending", getEventsAscending)
app.post("/getEventsDescending", getEventsDescending)

const storage = multer.diskStorage({
    destination: './public/profimages/',
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + '_' + Date.now() + path.extname(file.originalname)
      )
    }
})

app.post('/updateProfPhoto',function(req,res){
    upload(req, res, err => {
        if (err) {
          res.writeHead(400, {
            'Content-Type': 'text/plain'
          })
          res.end('Issue with uploading')
        } else {
          filename = req.file.filename;

          User.findOneAndUpdate({_id : req.body.userid},{profimage :req.file.filename}, function(err, result) {
            if (err) throw err;
                  console.log(result.affectedRows + " record(s) updated");
                  res.end("Details Updated!");
                });
          res.writeHead(200, {
            'Content-Type': 'text/plain'
          })
          res.end(JSON.stringify(req.file))
        }
      })
});

app.post('/updateRestPhoto',function(req,res){
    console.log("Uploading Rest Photo")
    uploadrest(req, res, err => {
        if (err) {
          res.writeHead(400, {
            'Content-Type': 'text/plain'
          })
          res.end('Issue with uploading')
        } else {
          filename = req.file.filename;
          Restaurant.findOneAndUpdate({_id : req.body.userid},{restphoto :req.file.filename}, function(err, result) {
            if (err) throw err;
                  console.log(result.affectedRows + " record(s) updated");
                  res.end("Details Updated!");
                });
         
          res.writeHead(200, {
            'Content-Type': 'text/plain'
          })
          res.end(JSON.stringify(req.file))
        }
      })
});

app.post('/updateRestPhotoTwo',function(req,res){
    console.log("Uploading Rest Photo")
    uploadrest(req, res, err => {
        if (err) {
          res.writeHead(400, {
            'Content-Type': 'text/plain'
          })
          res.end('Issue with uploading')
        } else {
          filename = req.file.filename;

          Restaurant.findOneAndUpdate({_id : req.body.userid},{restphoto2 :req.file.filename}, function(err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) updated");
            res.end("Details Updated!");
          });
         
          res.writeHead(200, {
            'Content-Type': 'text/plain'
          })
          res.end(JSON.stringify(req.file))
        }
      })
});

app.post('/updateRestPhotoThree',function(req,res){
    console.log("Uploading Rest Photo")
    uploadrest(req, res, err => {
        if (err) {
          res.writeHead(400, {
            'Content-Type': 'text/plain'
          })
          res.end('Issue with uploading')
        } else {
          filename = req.file.filename;

          Restaurant.findOneAndUpdate({_id : req.body.userid},{restphoto3 :req.file.filename}, function(err, result) {
            if (err) throw err;
                  console.log(result.affectedRows + " record(s) updated");
                  res.end("Details Updated!");
                });
         
          res.writeHead(200, {
            'Content-Type': 'text/plain'
          })
          res.end(JSON.stringify(req.file))
        }
      })
});

app.post('/updateRestPhotoFour',function(req,res){
    uploadrest(req, res, err => {
        if (err) {
          res.writeHead(400, {
            'Content-Type': 'text/plain'
          })
          res.end('Issue with uploading')
        } else {
          Restaurant.findOneAndUpdate({_id : req.body.userid},{restphoto4 :req.file.filename}, function(err, result) {
            if (err) throw err;
                  console.log(result.affectedRows + " record(s) updated");
                  res.end("Details Updated!");
                });
         
          res.writeHead(200, {
            'Content-Type': 'text/plain'
          })
          res.end(JSON.stringify(req.file))
        }
      })
});



app.post('/updateDishPhoto',function(req,res){
    console.log("Uploading Dish Photo in Backend!!")
    uploaddish(req, res, err => {
        if (err) {
          res.writeHead(400, {
            'Content-Type': 'text/plain'
          })
          res.end('Issue with uploading')
        } else {
    
          filename = req.file.filename;
    
          Dishes.findOneAndUpdate({_id : req.body.dishid},{dishphoto :req.file.filename}, function(err, result) {
            if (err) throw err;
                  console.log(result.affectedRows + " record(s) updated");
                  res.end("Details Updated!");
                });
         
          res.writeHead(200, {
            'Content-Type': 'text/plain'
          })
          res.end(JSON.stringify(req.file))
        }
      })
});


const upload = multer({
    storage: storage
}).single('profImage')

const uploadrest = multer({
    storage: storage
}).single('restphoto')

const uploaddish = multer({
    storage: storage
}).single('dishphoto')

app.listen(3001);
console.log("Server Listening on port 3001");