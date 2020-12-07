var connection =  new require('./kafka/Connection');
//topics files
var user_signup = require('./services/userSignup')
var rest_signup = require('./services/restSignup')
var rest_login = require('./services/restLogin');
var user_login = require('./services/userLogin')
var get_rest_data = require('./services/getRestData')
var add_dish = require('./services/addDish')
var get_dishes = require('./services/getDishes')
var get_dish_data = require('./services/getDishData')
var add_event = require('./services/addEvent')
var view_created_events = require('./services/viewCreatedEvents')
var get_cust_data = require('./services/getCustData')
var get_all_rest = require('./services/getAllRest')
var add_review = require('./services/addReview')
var get_reviews = require('./services/getReviews')
var add_to_cart = require('./services/addToCart')
var get_cart = require('./services/getCart')
var get_events = require('./services/getEvents')
var register_event = require('./services/registerEvent')
var get_registered_events = require('./services/getRegisteredEvents')
var get_registered_users = require('./services/getRegisteredUsers')
var update_customer = require('./services/updateCustomer')
var update_restaurant = require('./services/updateRestaurant')
var get_deliv_rest = require('./services/getDelivRest')
var get_dinein_rest = require('./services/getDineInRest')
var get_pickup_rest = require('./services/getPickupRest')
var place_order = require('./services/placeOrder')
var get_rest_orders = require('./services/getRestOrders')
var get_rest_order_details = require('./services/getRestOrderDetails')
var update_order_status = require('./services/updateOrderStatus')
var get_rest_out_delivery = require('./services/getRestOutDeliveryOrders')
var get_rest_received = require('./services/getRestReceivedOrders')
var get_rest_delivered = require('./services/getRestDeliveredOrders')
var get_rest_cancelled = require('./services/getRestCancelledOrders')
var get_user_orders = require('./services/getUserOrders')
var search_dish = require('./services/searchDish')
var search_location = require('./services/searchLocation')
var search_event = require('./services/searchEvent')
var get_coordinates = require('./services/getCoordinates')
var get_user_order_details = require('./services/getUserOrderDetails')
var get_cust_received = require('./services/getCustReceivedOrders')
var get_cust_preparing = require('./services/getCustPreparingOrders')
var get_cust_out_delivery = require('./services/getCustOutDeliveryOrders')
var get_cust_cancelled = require('./services/getCustCancelledOrders')
var get_cust_delivered = require('./services/getCustDeliveredOrders')
var get_all_users = require('./services/getAllUsers')
var follow_user = require('./services/followUser')
var get_following_users =require('./services/getFollowingUsers')
var search_user = require('./services/searchUser')
var send_message = require('./services/sendMessage')
var get_message = require('./services/getMessage')
var get_events_asc = require('./services/getEventsAsc')
var get_events_desc = require('./services/getEventsDesc')

 
function handleTopicRequest(topic_name,fname){
    
    var consumer = connection.getConsumer(topic_name);
    var producer = connection.getProducer();
    console.log('server is running ');
    consumer.on('message', function (message) {
        console.log('message received for ' + topic_name +" ", fname);
        console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);
        
        fname.handle_request(data.data, function(err,res){
            console.log('after handle'+res);
            var payloads = [
                { topic: data.replyTo,
                    messages:JSON.stringify({
                        correlationId:data.correlationId,
                        data : res
                    }),
                    partition : 0
                }
            ];
            producer.send(payloads, function(err, data){
                console.log(data);
            });
            return;
        });
        
    });
}
// Add your TOPICs here
//first argument is topic name
//second argument is a function that will handle this topic request
handleTopicRequest("user_signup",user_signup)
handleTopicRequest("rest_signup",rest_signup)
handleTopicRequest("rest_login",rest_login)
handleTopicRequest("user_login",user_login)
handleTopicRequest("get_rest_data",get_rest_data)
handleTopicRequest("add_dish", add_dish)
handleTopicRequest("get_dishes",get_dishes)
handleTopicRequest("get_dish_data", get_dish_data)
handleTopicRequest("add_event", add_event)
handleTopicRequest("view_created_events", view_created_events)
handleTopicRequest("get_cust_data", get_cust_data)
handleTopicRequest("get_all_rest", get_all_rest)
handleTopicRequest("add_review", add_review)
handleTopicRequest("get_reviews", get_reviews)
handleTopicRequest("add_to_cart", add_to_cart)
handleTopicRequest("get_cart", get_cart)
handleTopicRequest("get_events", get_events)
handleTopicRequest("register_event", register_event)
handleTopicRequest("get_registered_events", get_registered_events)
handleTopicRequest("get_registered_users", get_registered_users)
handleTopicRequest("update_customer", update_customer)
handleTopicRequest("update_restaurant", update_restaurant)
handleTopicRequest("get_deliv_rest", get_deliv_rest)
handleTopicRequest("get_dinein_rest", get_dinein_rest)
handleTopicRequest("get_pickup_rest", get_pickup_rest)
handleTopicRequest("place_order", place_order)
handleTopicRequest("get_rest_orders", get_rest_orders)
handleTopicRequest("get_rest_order_details", get_rest_order_details)
handleTopicRequest("update_order_status", update_order_status)
handleTopicRequest("get_rest_out_delivery", get_rest_out_delivery)
handleTopicRequest("get_rest_received", get_rest_received)
handleTopicRequest("get_rest_delivered", get_rest_delivered)
handleTopicRequest("get_rest_cancelled", get_rest_cancelled)
handleTopicRequest("get_user_orders", get_user_orders)
handleTopicRequest("search_dish", search_dish)
handleTopicRequest("search_location", search_location)
handleTopicRequest("search_event", search_event)
handleTopicRequest("get_coordinates", get_coordinates)
handleTopicRequest("get_user_order_details", get_user_order_details)
handleTopicRequest("get_cust_received", get_cust_received)
handleTopicRequest("get_cust_preparing", get_cust_preparing)
handleTopicRequest("get_cust_out_delivery", get_cust_out_delivery)
handleTopicRequest("get_cust_cancelled", get_cust_cancelled)
handleTopicRequest("get_cust_delivered", get_cust_delivered)
handleTopicRequest("get_all_users", get_all_users)
handleTopicRequest("follow_user", follow_user)
handleTopicRequest("get_following_users", get_following_users)
handleTopicRequest("search_user", search_user)
handleTopicRequest("send_message", send_message)
handleTopicRequest("get_message", get_message)
handleTopicRequest("get_events_asc", get_events_asc)
handleTopicRequest("get_events_desc", get_events_desc)