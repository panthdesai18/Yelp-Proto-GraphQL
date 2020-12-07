import {CUST_LOGIN, CUST_PROFILE, CUST_SIGNUP, CUST_GET_UPDATE, CUST_POST_UPDATE, CUST_LOGOUT, REST_SIGNUP, REST_LOGIN, REST_PROFILE, REST_GET_UPDATE, REST_POST_UPDATE, ADD_DISH, DISH_PROFILE, REST_REVIEWS, CUST_ORDERS, CUST_ORDER_DETAILS, REST_ORDERS, REST_ORDER_DETAILS, REST_EVENTS, REGISTERED_EVENTS, CART, GET_RESTAURANTS, VIEW_UNIV_REST, GET_ALL_DISH, MAP, PLACE_ORDER, UPDATE_STATUS, POST_REVIEW, SEARCH_REST, SEARCH_DISH, FILTER_DELIV_REST, FILTER_PICKUP_REST, FILTER_DINEIN_REST, FILTER_CUST_DELIVORD, FILTER_CUST_RECORD, FILTER_CUST_PREPORD, FILTER_CUST_OFDORD, FILTER_CUST_CANORD, FILTER_REST_NEW, FILTER_REST_PAST, FILTER_REST_CANCELLED, ADD_TO_CART, CREATE_EVENT, CREATED_EVENTS, GET_REG_USERS, DISH_PHOTO, GET_ALL_USERS, GET_USERS_TAB_USER, GET_FOLLOWING_USERS, SEARCH_USER, SEND_MESSAGE_REST, GET_EVENTS_ASC, GET_EVENTS_DESC} from '../constants/action-types'
const startState = {
    info:null
}

function defaultReducer(state = startState, action){
    if(action.type === CUST_SIGNUP){
        console.log("Signing Up!")
        return Object.assign({},state,{
            info: action.input.message
        })
    }
    else if(action.type === CUST_LOGIN){
        console.log("Logging User In!")
        return Object.assign({},state,{
            info: action.input.message,
            userid: action.input.userid
        })
    }
    else if(action.type === CUST_PROFILE){
        console.log("Gathering User Data!")
        return Object.assign({},state,{
            info: action.input.message,
            userid: action.input.userid,
            firstname: action.input.firstname,
            lastname: action.input.lastname,
            imageURL: action.input.imageSrc,
            message : "User Data!",
            email : action.input.email,
            headline : action.input.headline,
            city : action.input.city,
            state : action.input.state,
            country : action.input.country,
            birthday : action.input.birthday,
            address : action.input.address,
            blog : action.input.blog,
            zipcode : action.input.zipcode,
            ilove: action.input.ilove,
            nickname : action.input.nickname,  
        })
    }
    else if(action.type === CUST_GET_UPDATE){
        console.log("Gathering User Data!")
        return Object.assign({},state,{
            info: action.input.message,
            userid: action.input.userid,
            firstname: action.input.firstname,
            lastname: action.input.lastname,
            imageURL: action.input.imageSrc,
            message : "User Data!",
            email : action.input.email,
            headline : action.input.headline,
            city : action.input.city,
            state : action.input.state,
            country : action.input.country,
            birthday : action.input.birthday,
            address : action.input.address,
            blog : action.input.blog,
            zipcode : action.input.zipcode,
            ilove: action.input.ilove,
            nickname : action.input.nickname,  
        })
    }
    else if(action.type === CUST_POST_UPDATE){
        console.log("Updating User Profile!")
        return Object.assign({},state,{
            info: action.input.message,
            userid: action.input.userid,
            firstname: action.input.firstname,
            lastname: action.input.lastname,
            imageURL: action.input.imageSrc,
            message : "User Data!",
            email : action.input.email,
            headline : action.input.headline,
            city : action.input.city,
            state : action.input.state,
            country : action.input.country,
            birthday : action.input.birthday,
            address : action.input.address,
            blog : action.input.blog,
            zipcode : action.input.zipcode,
            ilove: action.input.ilove,
            nickname : action.input.nickname,
        })
    }
    else if(action.type === CUST_LOGOUT){
        console.log("Logging User Out")
        return Object.assign({}, state, {
            message: action.input.message
        })
    }
    if(action.type === REST_SIGNUP){
        console.log("Signing Up!")
        return Object.assign({},state,{
            info: action.input.message
        })
    }
    else if(action.type === REST_LOGIN){
        console.log("Logging User In!")
        return Object.assign({},state,{
            info: action.input.message,
            userid: action.input.userid
        })
    }
    else if(action.type === REST_PROFILE){
        console.log("Gathering Rest Data!")
        return Object.assign({},state,{
            info: action.input.message,
            userid: action.input.userid,
            imageURL: action.input.imageUrl,
            restname: action.input.firstname,
            message : "User Data!",
            email : action.input.email,
            zipcode : action.input.zipcode,

        })
    }
    else if(action.type === REST_GET_UPDATE){
        console.log("Gathering User Data!")
        return Object.assign({},state,{
            info: action.input.message,
            userid: action.input.userid,
            restname: action.input.restname,
            message : "User Data!",
            email : action.input.email,
            address : action.input.address,
            zipcode : action.input.zipcode,
            phno: action.input.phno
        })
    }
    else if(action.type === REST_POST_UPDATE){
        console.log("Updating User Profile!")
        return Object.assign({},state,{
            info: action.input.message,
            userid: action.input.userid,
            restname: action.input.restname,
            message : "User Data!",
            email : action.input.email,
            address : action.input.address,
            zipcode : action.input.zipcode,
            phno: action.input.phno
        })
    }
    else if(action.type === ADD_DISH){
        console.log("Adding Dish")
        return Object.assign({}, state, {
            message: action.input.message
        })
    }
    else if(action.type === SEND_MESSAGE_REST){
        console.log("Sending Message")
        return Object.assign({}, state, {
            message: action.input.message
        })
    }
    else if(action.type === DISH_PROFILE){
        console.log("Gathering Dish Data")
        return Object.assign({},state,{
            info: action.input.message,
            dishes: action.input.dishes
        })
    }
    else if(action.type === REST_REVIEWS){
        console.log("Gathering Restaurant Reviews")
        return Object.assign({},state,{
            info: action.input.message,
            reviews: action.input.reviews
        })
    }
    else if(action.type === CUST_ORDERS){
        console.log("Gathering Customers Orders")
        return Object.assign({}, state, {
            info: action.input.message,
            orders: action.input.orders
        })
    }
    else if(action.type === CUST_ORDER_DETAILS){
        console.log("Gathering Customer Order Details")
        return Object.assign({}, state, {
            info_orddets: action.input.message,
            orderdetails: action.input.orderdetails
        })
    }
    else if(action.type === REST_ORDERS){
        console.log("Gathering Rest Orders")
        return Object.assign({}, state, {
            info: action.input.message,
            orders: action.input.orders
        })
    }
    else if(action.type === REST_ORDER_DETAILS){
        console.log("Gathering Restaurant Order Details")
        return Object.assign({}, state, {
            info_orderdets: action.input.message,
            orderdetails: action.input.orderdetails
        })
    }
    else if(action.type === REST_EVENTS){
        console.log("Gathering Rest Events")
        return Object.assign({}, state, {
            info: action.input.message,
            events: action.input.events
        })
    }
    else if(action.type === GET_EVENTS_ASC){
        console.log("Gathering Events in Ascending!")
        return Object.assign({}, state, {
            info1: action.input.message,
            events: action.input.events
        })
    }
    else if(action.type === GET_EVENTS_DESC){
        console.log("Gathering Events in Descending!")
        return Object.assign({}, state, {
            info2: action.input.message,
            events: action.input.events
        })
    }
    else if(action.type === REGISTERED_EVENTS){
        console.log("Gathering Registered Events")
        return Object.assign({}, state, {
            info: action.input.message,
            events: action.input.events
        })
    }
    else if(action.type === CART){
        console.log("Gathering Cart Items")
        return Object.assign({}, state, {
            info: action.input.message,
            cart: action.input.cart
        })
    }
    else if(action.type === GET_RESTAURANTS){
        console.log("Gathering Restaurants")
        return Object.assign({},state, {
            info: action.input.message,
            restaurants: action.input.restaurants
        })
    }
    else if(action.type === VIEW_UNIV_REST){
        console.log("Gathering Unique Restaurant Data!")
        return Object.assign({}, state, {
            info: action.input.message,
            rest: action.input.rest
        })
    }
    else if(action.type === GET_ALL_DISH){
        console.log("Gathering All Rest Dishes!")
        return Object.assign({}, state, {
            info2: action.input.message,
            dishes: action.input.dishes
        })
    }
    else if(action.type === MAP){
        console.log("Gathering Map Coordinated!")
        return Object.assign({}, state, {
            info: action.input.message,
            coords: action.input.coords
        })
    }
    else if(action.type === PLACE_ORDER){
        console.log("Placing Order!")
        return Object.assign({}, state, {
            info1: action.input.message
        })
    }
    else if(action.type === UPDATE_STATUS){
        console.log("Updating Order Status!")
        return Object.assign({}, state, {
            info1: action.input.message
        })
    }
    else if(action.type === POST_REVIEW){
        console.log("Adding Review!")
        return Object.assign({}, state, {
            info3: action.input.message
        })
    }
    else if(action.type === SEARCH_REST){
        console.log("Searching Restaurant Name!")
        return Object.assign({}, state, {
            info1: action.input.message,
            locRest: action.input.locRest
        })
    }
    else if(action.type === SEARCH_DISH){
        console.log("Searching Dish Name!")
        return Object.assign({}, state, {
            info2: action.input.message,
            dishRest: action.input.dishRest
        })
    }
    else if(action.type === FILTER_DELIV_REST){
        console.log("Filtering Deliv Restaurant!")
        return Object.assign({}, state, {
            info1: action.input.message,
            restaurants: action.input.restaurants
        })
    }
    else if(action.type === FILTER_PICKUP_REST){
        console.log("Filtering Pickup Restaurant!")
        return Object.assign({}, state, {
            info2: action.input.message,
            restaurants: action.input.restaurants
        })
    }
    else if(action.type === FILTER_DINEIN_REST){
        console.log("Filtering DineIn Restaurant!")
        return Object.assign({}, state, {
            info3: action.input.message,
            restaurants: action.input.restaurants
        })
    }
    else if(action.type === FILTER_CUST_DELIVORD){
        console.log("Filtering Delivered Orders!")
        return Object.assign({}, state, {
            info3: action.input.message,
            orders: action.input.orders,
            orderdetails: action.input.orderdetails
        })
    }
    else if(action.type === FILTER_CUST_RECORD){
        console.log("Filtering Just Received Orders!")
        return Object.assign({}, state, {
            info3: action.input.message,
            orders: action.input.orders,
            orderdetails: action.input.orderdetails
        })
    }
    else if(action.type === FILTER_CUST_PREPORD){
        console.log("Filtering Preparing Orders!")
        return Object.assign({}, state, {
            info3: action.input.message,
            orders: action.input.orders,
            orderdetails: action.input.orderdetails
        })
    }
    else if(action.type === FILTER_CUST_OFDORD){
        console.log("Filtering Out for Delivery Orders!")
        return Object.assign({}, state, {
            info3: action.input.message,
            orders: action.input.orders,
            orderdetails: action.input.orderdetails
        })
    }
    else if(action.type === FILTER_CUST_CANORD){
        console.log("Filtering Cancelled Orders!")
        return Object.assign({}, state, {
            info3: action.input.message,
            orders: action.input.orders,
            orderdetails: action.input.orderdetails
        })
    }
    else if(action.type === FILTER_REST_NEW){
        console.log("Filtering New Orders!")
        return Object.assign({}, state, {
            info2: action.input.message,
            orders: action.input.orders,
            orderdetails: action.input.orderdetails
        })
    }
    else if(action.type === FILTER_REST_PAST){
        console.log("Filtering Past Orders!")
        return Object.assign({}, state, {
            info3 : action.input.message,
            orders: action.input.orders,
            orderdetails: action.input.orderdetails
        })
    }
    else if(action.type === FILTER_REST_CANCELLED){
        console.log("Filtereing Cancelled Orders!")
        return Object.assign({}, state, {
            info4: action.input.message,
            orders: action.input.orders,
            orderdetails: action.input.orderdetails
        })
    }
    else if(action.type === ADD_TO_CART){
        console.log("Adding to Cart!")
        return Object.assign({}, state, {
            info4: action.input.message
        })
    }
    else if(action.type === CREATE_EVENT){
        console.log("Creating New Event!")
        return Object.assign({}, state, {
            info: action.input.message
        })
    }
    else if(action.type === CREATED_EVENTS){
        console.log("Created Events Are!")
        return Object.assign({}, state, {
            info: action.input.message,
            events: action.input.events
        })
    }
    else if(action.type === GET_REG_USERS){
        console.log("Getting Registered Users!")
        return Object.assign({}, state, {
            info1: action.input.message,
            users: action.input.users
        })
    }
    else if(action.type === DISH_PHOTO){
        console.log("Uploading Dish Photo!")
        return Object.assign({}, state, {
            info: action.input.message
        })
    }
    else if(action.type === GET_ALL_USERS){
        console.log("Getting all Users")
        return Object.assign({}, state, {
            info: action.input.message,
            users:action.input.users
        })
    }
    else if(action.type === GET_USERS_TAB_USER){
        console.log("Getting Individual User's Data")
        return Object.assign({}, state, {
            info1: action.input.message,
            ind_user:action.input.ind_user
        })
    }
    else if(action.type === GET_FOLLOWING_USERS){
        console.log("Getting Following Users")
        return Object.assign({}, state, {
            info: action.input.message,
            users:action.input.users
        })
    }
    else if(action.type === SEARCH_USER){
        console.log("Getting Searched User")
        return Object.assign({}, state ,{
            info1: action.input.message,
            users:action.input.users
        })
    }
    return state;
}

export default defaultReducer;