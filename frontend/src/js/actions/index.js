import {ADD_DISH, ADD_TO_CART, CART, CREATED_EVENTS, CREATE_EVENT, CUST_ORDERS, CUST_ORDER_DETAILS, CUST_POST_UPDATE, CUST_SIGNUP, DISH_PHOTO, FILTER_CUST_CANORD, FILTER_CUST_DELIVORD, FILTER_CUST_OFDORD, FILTER_CUST_PREPORD, FILTER_CUST_RECORD, FILTER_DELIV_REST, FILTER_DINEIN_REST, FILTER_PICKUP_REST, FILTER_REST_CANCELLED, FILTER_REST_NEW, FILTER_REST_PAST, GET_ALL_DISH, GET_ALL_USERS, GET_EVENTS_ASC, GET_EVENTS_DESC, GET_FOLLOWING_USERS, GET_REG_USERS, GET_RESTAURANTS, MAP, PLACE_ORDER, POST_REVIEW, REGISTERED_EVENTS, REST_EVENTS, REST_ORDERS, REST_ORDER_DETAILS, REST_REVIEWS, SEARCH_DISH, SEARCH_REST, SEARCH_USER, SEND_MESSAGE_REST, UPDATE_STATUS, VIEW_UNIV_REST} from '../constants/action-types'
import {CUST_LOGIN} from '../constants/action-types'
import {CUST_PROFILE} from '../constants/action-types'
import {CUST_GET_UPDATE} from '../constants/action-types'
import {CUST_LOGOUT} from '../constants/action-types'
import {REST_SIGNUP} from '../constants/action-types'
import {REST_LOGIN} from '../constants/action-types'
import {REST_PROFILE} from '../constants/action-types'
import {REST_GET_UPDATE} from '../constants/action-types'
import {REST_POST_UPDATE} from '../constants/action-types'
import {DISH_PROFILE} from '../constants/action-types'
import axios from 'axios';
import { connURL } from '../../Configure'
import { notification } from 'antd';
import "antd/dist/antd.css";


export function signUp(payload){
    console.log("Attempting User Creation!")
    let input = {}
    return(dispatch) =>{
        axios.defaults.withCredentials = true;
        
        axios.post(`${connURL}/signUp`,payload)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - SIGNUP!")
                    input = {
                        message : "User Created"
                    }
                }else{
                    
                }
                dispatch({type: CUST_SIGNUP,input})
            })
            .catch(err => {
                
        })
    }
}

export function login(payload){
    console.log("Attempting User Login")
    let input = {}
    return(dispatch) => {
        axios.defaults.withCredentials = true;
        axios.post(`${connURL}/login`,payload)
            .then(response => {
                console.log(response)
              if(response.status === 200)
              {
                console.log("HERE IN ACTIONS - LOGIN")
                console.log(response.data)
                window.sessionStorage.setItem("UserID", response.data)
                window.location.replace('/custProfile')
                input = {
                    message : "User Created",
                    userid: window.sessionStorage.getItem("UserID")
                }
              }
              else{

              }
              dispatch({type: CUST_LOGIN, input})
            })
            .catch(err => {

            })
    }
}

export function custProfile(payload){
    console.log("Gathering Cust Data!")
    let input = {}
    return(dispatch) => {
        axios.post(`${connURL}/getUserData`,payload)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - GETTING USER DATA!")
                    console.log(response.data)
                    console.log("firstname", response.data.firstname)
                    input ={
                        message : "User Data!",
                        userid: window.sessionStorage.getItem("UserID"),
                        firstname : response.data.firstname,
                        lastname : response.data.lastname,
                        email : response.data.email,
                        headline : response.data.headline,
                        city : response.data.city,
                        state : response.data.state,
                        country : response.data.country,
                        birthday : response.data.birthday,
                        address : response.data.address,
                        blog : response.data.blog,
                        zipcode : response.data.zipcode,
                        ilove: response.data.ilove,
                        nickname : response.data.nickname,
                        imageSrc : `http://localhost:3001/profimages/`+response.data.profimage
                    }
                }else{
                }
                dispatch({type: CUST_PROFILE, input})
            })
            .catch(err => {
                
        })
    }
}

export function restProfile(payload){
    console.log("Gathering Cust Data!")
    let input = {}
    return(dispatch) => {
        axios.post(`${connURL}/getRestData`,payload)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - GETTING RESTAURANT DATA!")
                    console.log(response.data)
                    console.log("restname", response.data.restname)
                    input ={
                        message : "Restaurant Data!",
                        userid: window.sessionStorage.getItem("UserID"),
                        firstname : response.data.restname,
                        email : response.data.email,
                        zipcode : response.data.zipcode,
                        imageUrl : `http://localhost:3001/profimages/`+response.data.restphoto
                    }
                }else{
                }
                dispatch({type: REST_PROFILE, input})
            })
            .catch(err => {
                
        })
    }
}

export function getProfile(payload){
    console.log("Gathering Cust Data!")
    let input = {}
    return(dispatch) => {
        axios.post(`${connURL}/getUserData`,payload)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - GETTING PROFILE DATA!")
                    console.log(response.data)
                    console.log("firstname", response.data.firstname)
                    Object.keys(response.data).forEach(function(key) {
                                            if(response.data[key] === null || response.data[key] === 'null'){
                                                console.log(key)
                                                response.data[key] = ''
                                            }
                                        });
                    input ={
                        message : "User Data!",
                        userid: window.sessionStorage.getItem("UserID"),
                        firstname : response.data.firstname,
                        lastname : response.data.lastname,
                        email : response.data.email,
                        headline : response.data.headline,
                        city : response.data.city,
                        state : response.data.state,
                        country : response.data.country,
                        birthday : response.data.birthday,
                        address : response.data.address,
                        blog : response.data.blog,
                        zipcode : response.data.zipcode,
                        ilove: response.data.ilove,
                        nickname : response.data.nickname,
                        imageSrc : `http://localhost:3001/profimages/`+response.data.profimage
                    }
                }else{
                }
                dispatch({type: CUST_GET_UPDATE, input})
            })
            .catch(err => {
                
        })
    }
}

export function postProfile(payload){
    console.log("Updating Data!");
    let input = {}
    return(dispatch) => {
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post(`${connURL}/updateCust`,payload)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 200){
                    input ={
                        message : "User Data!",
                        userid: window.sessionStorage.getItem("UserID"),
                        firstname : payload.firstname,
                        lastname : payload.lastname,
                        email : payload.email,
                        headline : payload.headline,
                        city : payload.city,
                        state : payload.state,
                        country : payload.country,
                        birthday : payload.birthday,
                        address : payload.address,
                        blog : payload.blog,
                        zipcode : payload.zipcode,
                        ilove: payload.ilove,
                        nickname : payload.nickname,
                        //imageSrc : 'http://localhost:3001/profimages/'+payload.profimage
                    }
                    // window.location.replace('/custProfile')
                }else{
                }
                dispatch({type: CUST_POST_UPDATE, input})
            })
            .catch(err => {
                //document.getElementById("invalidLog").style.display='block';
            })

    }
}

export function restsignUp(payload){
    console.log("Attempting User Creation!")
    let input = {}
    return(dispatch) =>{
        axios.defaults.withCredentials = true;
        
        axios.post(`${connURL}/restsignUp`,payload)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - REST SIGNUP!")
                    input = {
                        message : "Rest User Created"
                    }
                }else{
                    
                }
                dispatch({type: REST_SIGNUP,input})
            })
            .catch(err => {
                
        })
    }
}

export function restlogin(payload){
    console.log("Attempting User Login")
    let input = {}
    return(dispatch) => {
        axios.defaults.withCredentials = true;
        axios.post(`${connURL}/reslogin`,payload)
            .then(response => {
                console.log(response)
              if(response.status === 200)
              {
                console.log("HERE IN ACTIONS - LOGIN")
                console.log(response.data)
                window.sessionStorage.setItem("UserID", response.data)
                //window.location.replace('/custProfile')
                input = {
                    message : "User Created",
                    userid: window.sessionStorage.getItem("UserID")
                }
                window.location.replace('/restProfile')
              }
              else{

              }
              dispatch({type: REST_LOGIN, input})
            })
            .catch(err => {

            })
    }
}

export function getRestProfile(payload){
    console.log("Gathering Cust Data!")
    let input = {}
    return(dispatch) => {
        axios.post(`${connURL}/getRestData`,payload)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - GETTING REST PROFILE DATA!")
                    console.log(response.data)
                    console.log("restname", response.data.restname)
                    Object.keys(response.data).forEach(function(key) {
                                            if(response.data[key] === null || response.data[key] === 'null'){
                                                console.log(key)
                                                response.data[key] = ''
                                            }
                                        });
                    input ={
                        message : "User Data!",
                        userid: window.sessionStorage.getItem("UserID"),
                        restname : response.data.restname,
                        email: response.data.email,
                        address : response.data.address,
                        zipcode : response.data.zipcode,
                        description: response.data.description,
                        phno: response.data.phno
                    }
                }else{
                }
                dispatch({type: REST_GET_UPDATE, input})
            })
            .catch(err => {
                
        })
    }
}

export function postRestProfile(payload){
    console.log("Updating Data!");
    let input = {}
    return(dispatch) => {
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post(`${connURL}/updateRest`,payload)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 200){
                    input ={
                        message : "User Data!",
                        userid: window.sessionStorage.getItem("UserID"),
                        restname : payload.restname,
                        email : payload.email,
                        address : payload.address,
                        zipcode : payload.zipcode,
                        description : payload.description,
                        phno: payload.phno
                        // imageSrc : 'http://localhost:3001/profimages/'+payload.profimage
                    }
                    window.location.href('/restProfile')
                }else{
                }
                dispatch({type: REST_POST_UPDATE, input})
            })
            .catch(err => {
                //document.getElementById("invalidLog").style.display='block';
            })

    }
}

export function addDish(payload){
    console.log("Attempting Dish Addition")
    let input = {}
    return(dispatch) =>{
        axios.defaults.withCredentials = true;
        
        axios.post(`${connURL}/addDish`,payload)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - ADD DISH!")
                    input = {
                        message : "Dish Added."
                    }
                    window.location.replace('/restProfile')
                }else{
                    
                }
                dispatch({type: ADD_DISH,input})
            })
            .catch(err => {
                
        })
    }
}

export function dishProfile(payload){
    console.log("Gathering Dish Data!")
    let input = {}
    return(dispatch) => {
        axios.post(`${connURL}/getDishData`,payload)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - GETTING DISH DATA!")
                    input ={
                        message : "Dishes Data!",
                        dishes : response.data 
                    }
                }else{
                }
                dispatch({type: DISH_PROFILE, input})
            })
            .catch(err => {
                
        })
    }
}

export function restReviews(payload){
    console.log("Gathering Restaurant Reviews!")
    let input = {}
    return(dispatch) => {
        axios.post(`${connURL}/getReview`, payload)
            .then(response => {
                console.log("Status Code : ", response.status);
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - GETTING REST REVIEWS!")
                    input ={
                        message: "Reviews Data!",
                        reviews: response.data
                    }
                }else{

                }
                dispatch({type: REST_REVIEWS, input})
            })
            .catch(err => {

            })
    }
}

export function custOrders(payload){
    console.log("Gathering Customer Orders!")
    let input = {}
    return(dispatch) => {
        axios.post(`${connURL}/getUserOrders`, payload)
            .then(response => {
                console.log("Status Code : ", response.status);
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - GETTING CUST ORDERS!")
                    input = {
                        message: "Cust Orders Data!",
                        orders: response.data
                    }
                }else{

                }
                dispatch({type: CUST_ORDERS, input})
            })
            .catch( err => {

            })
    }
}

export function custOrderDetails(payload){
    console.log("Gathering Customer Order Details!")
    let input = {}
    return (dispatch) => {
        axios.post(`${connURL}/getUserOrderDetails`, payload)
            .then(response => {
                console.log("Status Code : ", response.status);
                if(response.status === 200){
                    console.log("HERE IN ACTION - GETTING CUSTOMER ORDER DETAILS!")
                    input = {
                        message: "Cust Order Details Data!",
                        orderdetails: response.data
                    }
                }else{

                }
                dispatch({type: CUST_ORDER_DETAILS, input})
            })
            .catch( err => {

            })
    }
}

export function restOrders(payload){
    console.log("Gathering Restaurant Order!")
    let input ={}
    return (dispatch) => {
        axios.post(`${connURL}/getRestOrders`,payload)
            .then(response => {
                console.log("Status Code : ", response.status);
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - GETTING REST ORDERS!")
                    input = {
                        message: "Rest Order Data!",
                        orders: response.data
                    }
                }else{

                }
                dispatch({type: REST_ORDERS, input})
            })
            .catch( err => {

            })
    }
}

export function restOrderDetails(payload){
    console.log("Gathering Restaurant Order Details!")
    let input = {}
    return (dispatch) => {
        axios.post(`${connURL}/getRestOrderDetails`, payload)
            .then(response => {
                console.log("Status Code : ", response.status);
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - GETTING REST ORDER DETAILS!")
                    input = {
                        message: "Rest Order Details Data!",
                        orderdetails: response.data
                    }
                }else{

                }
                dispatch({type: REST_ORDER_DETAILS, input})
            })
            .catch(err => {

            })
    }
}

export function restEvents(payload){
    console.log("Gathering Restuarant Events!")
    let input = {}
    return(dispatch) => {
        axios.post(`${connURL}/getEvents`, payload)
            .then(response => {
                console.log("Status Code : ", response.status)
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - GETTING REST EVENTS!")
                    input = {
                        message: "Rest Events are!",
                        events: response.data
                    }
                }else{

                }
                dispatch({type: REST_EVENTS, input})
            })
            .catch(err => {

            })
    }
}

export function getEventsAscending(payload){
    console.log("Gathering Restuarant Events!")
    let input = {}
    return(dispatch) => {
        axios.post(`${connURL}/getEventsAscending`, payload)
            .then(response => {
                console.log("Status Code : ", response.status)
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - GETTING REST EVENTS!")
                    input = {
                        message: "Rest Events in Ascending are!",
                        events: response.data
                    }
                }else{

                }
                dispatch({type: GET_EVENTS_ASC, input})
            })
            .catch(err => {

            })
    }
}

export function getEventsDescending(payload){
    console.log("Gathering Restuarant Events!")
    let input = {}
    return(dispatch) => {
        axios.post(`${connURL}/getEventsDescending`, payload)
            .then(response => {
                console.log("Status Code : ", response.status)
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - GETTING REST EVENTS!")
                    input = {
                        message: "Rest Events in Descending are!",
                        events: response.data
                    }
                }else{

                }
                dispatch({type: GET_EVENTS_DESC, input})
            })
            .catch(err => {

            })
    }
}

export function getAllUsers(payload){
    console.log("Gathering All Users!")
    let input = {}
    return(dispatch) => {
        axios.post(`${connURL}/getAllUsers`, payload)
            .then(response => {
                console.log("Status Code :", response.status)
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - GETTING ALL USERS!")
                    input = {
                        message: "Users Data!",
                        users:response.data
                    }
                }else{

                }
                dispatch({type: GET_ALL_USERS, input})
            })
            .catch(err => {

            })
    }
}

export function searchUser(payload){
    console.log("Gathering Search Results!")
    let input = {}
    return(dispatch) => {
        axios.post(`${connURL}/searchUser`, payload)
            .then(response => {
                console.log("Status Code : ", response.status)
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - GETTING SEARCHED USER!")
                    input = {
                        message: "Searched User",
                        users: response.data
                    }
                }else{

                }
                dispatch({type: SEARCH_USER, input})
            })
            .catch(err => {

            })
    }
}

// export function getUsersTabUser(payload){
//     console.log("Gathering Individual Users data")
// }

export function registeredEvents(payload){
    console.log("Gathering Registered Events!")
    let input = {}
    return(dispatch) => {
        axios.post(`${connURL}/getRegisteredEvents`, payload)
            .then(response => {
                console.log("Status Code : ", response.status)
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - GETTING REGISTERED EVENTS!")
                    input = {
                        message: "Registered Events Data!",
                        events: response.data
                    }
                }else{

                }
                dispatch({type: REGISTERED_EVENTS, input})
            })
            .catch(err => {

            })
    }
}

export function cart(){
    console.log("Gathering Cart Data!")
    let input = {}
    return(dispatch) => {
        axios.get(`${connURL}/getCart`)
            .then(respone => {
                console.log("Status Code : ", respone.status)
                if(respone.status === 200){
                    console.log("HERE IN ACTIONS - GETTING CART ITEMS!")
                    input = {
                        message: "Cart Items!",
                        cart: respone.data
                    }
                }else{

                }
                dispatch({type: CART, input})
            })
            .catch(err => {

            })
    }
}

export function getRestaurants(payload){
    console.log("Gathering Restaurants!")
    let input = {}
    return(dispatch) => {
        axios.post(`${connURL}/getallRest`, payload)
            .then(response => {
                console.log("Status Code : ", response.status)
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - GETTING RESTAURANTS!")
                    input = {
                        message: "Getting Restaurants!",
                        restaurants: response.data
                    }
                }else{

                }
                dispatch({type: GET_RESTAURANTS, input})
            })
            .catch(err => {

            })
    }
}

export function getUniqRest(payload){
    console.log("Gathering Unique Restaurant!")
    let input = {}
    return(dispatch) => {
        axios.post(`${connURL}/getRestData`, payload)
            .then(response => {
                console.log("Status Code : ", response.status)
                if(response.status === 200){
                    console.log("HERE IN ACTION - GETTING UNIQ RESTAURANT!")
                    input = {
                        message: "Getting Unique Restaurant",
                        rest: response.data
                    }
                }
                else{

                }
                dispatch({type: VIEW_UNIV_REST, input})
            })
            .catch(err => {

            })
    }
}

export function getAllDish(payload){
    console.log("Gathering All Dishes!")
    let input ={}
    return(dispatch) => {
        axios.post(`${connURL}/getDishes`, payload)
            .then(response => {
                console.log("Status Code : ", response.status)
                if(response.status === 200){
                    console.log("HERE IN ACTION - GETTING ALL DISHES!")
                    input = {
                        message: "Getting Dishes",
                        dishes : response.data
                    }
                }
                else{

                }
                dispatch({type: GET_ALL_DISH, input})
            })
            .catch( err => {

            })
    }
}

export function getCoords(){
    console.log("Gathering Map Coordindates!")
    let input = {}
    return(dispatch) => {
        axios.post(`${connURL}/getCoordinates`)
            .then(response => {
                console.log("Status Code : ", response.status)
                if(response.status === 200){
                    console.log("HERE IN ACTION - GETTING ALL COORDINATES!")
                    input = {
                        message: "Getting Coords",
                        coords: response.data
                    }
                }
                else{

                }
                dispatch({type: MAP, input})
            })
            .catch( err => {

            })
    }
}

export function placeOrder(payload){
    console.log("Attempting Placing Order!")
    let input = {}
    return(dispatch) =>{
        axios.defaults.withCredentials = true;
        axios.post(`${connURL}/placeOrder`,payload)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - PLACING ORDER!")
                    input = {
                        message : "Order Placed!"
                    }
                }else{
                    
                }
                dispatch({type: PLACE_ORDER,input})
            })
            .catch(err => {
                
        })
    }
}

export function updateOrder(payload){
    console.log("Attempting Order Status Change!")
    let input = {}
    return(dispatch) => {
        axios.post(`${connURL}/updateOrderStatus`, payload)
            .then(response => {
                console.log("Status Code : ", response.status);
                if(response.status === 200){
                    notification["success"]({
                        message: 'Order Status Updated'
                    });
                    console.log("HERE IN ACTIONS - UPDATING STATUS CHANGE!")
                    input = {
                        message: "Status Changed!"
                    }
                }
                else{

                }
                dispatch({type: UPDATE_STATUS, input})
            })
            .catch( err => {

            })
    }
}

export function postingReview(payload){
    console.log("Attempting Review Posting!")
    let input = {}
    return(dispatch) => {
        axios.defaults.withCredentials = true;
        axios.post(`${connURL}/postReview`, payload)
            .then(response => {
                console.log("Status Code : ", response.status);
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - POSTING REVIEW!")
                    input = {
                        message: "Review Added!"
                    }
                    notification["success"]({
                        message: 'Review Added!'
                    });
                }else{

                }
                dispatch({type: POST_REVIEW, input})
            })
            .catch( err => {

            })
    }
}

export function searchRestName(payload){
    console.log("Attempting Restaurant Search!")
    let input = {}
    return(dispatch) => {
        // axios.defaults.withCredentials = true;
        axios.post(`${connURL}/searchLocation`, payload)
            .then(response => {
                console.log("Status Code : ", response.status);
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - SEARCHING RESTAURANT")
                    input = {
                        message: "Searched Restaurant Data!",
                        locRest : response.data
                    }
                }else{

                }
                dispatch({type: SEARCH_REST, input})
            })
            .catch( err => {

            })
    }
}

export function searchDishName(payload){
    console.log("Attempting Dish Search!")
    let input = {}
    return(dispatch) => {
        axios.post(`${connURL}/searchDish`, payload)
            .then(response => {
                console.log("Status Code : ", response.status);
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - SEARCHING DISHES!")
                    input = {
                        message: "Searched Dish Data!",
                        dishRest: response.data
                    }
                }
                else{

                }
                dispatch({type: SEARCH_DISH, input})
            })
            .catch(err => {

            })
    }
}

export function filterDelivery(){
    console.log("Delivery Restaurants!")
    let input = {}
    return(dispatch) => {
        axios.post(`${connURL}/getDelivRest`)
            .then(response => {
                console.log("Status Code : ", response.status)
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - FILTERING RESTAURANT!")
                    input = {
                        message: "Filtering Restaurant",
                        restaurants: response.data
                    }
                }
                else{

                }
                dispatch({type: FILTER_DELIV_REST, input})
            })
            .catch(err => {

            })
    }
}

export function filterPickup(){
    console.log("Pickup Restaurants!")
    let input = {}
    return(dispatch) => {
        
            axios.post(`${connURL}/getPickup`)
                .then(response => {
                    console.log("Status Code : ", response.status)
                    if(response.status === 200){
                        console.log("HERE IN ACTIONS - FILTERING RESTAURANT!")
                        input = {
                            message: "Filtering Restaurant",
                            restaurants: response.data
                        }
                    }
                    else{
    
                    }
                    dispatch({type: FILTER_PICKUP_REST, input})
                })
                .catch(err => {
    
                })
            
    }
}

export function filterDinein(){
    console.log("Pickup Restaurants!")
    let input = {}
    return(dispatch) => {
            axios.post(`${connURL}/getDineIn`)
                .then(response => {
                    console.log("Status Code : ", response.status)
                    if(response.status === 200){
                        console.log("HERE IN ACTIONS - FILTERING RESTAURANT!")
                        input = {
                            message: "Filtering Restaurant",
                            restaurants: response.data
                        }
                    }
                    else{
    
                    }
                    dispatch({type: FILTER_DINEIN_REST, input})
                })
                .catch(err => {
    
                })  
    }
}

export function filterCustDeliv(payload){
    console.log("Delivered Orders!")
    let input = {}
    return(dispatch) => {
        axios.post(`${connURL}/getCustDelivered`,payload)
            .then(response => {
                console.log("Status Code : ", response.status)
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - FILTERING DELIVERED ORDERS!")
                    input = {
                        message: "Filtering Delivered Orders!",
                        orderdetails: response.data[0],
                        orders: response.data[1]
                    }
                    console.log("INPUT = ", input)
                }else{

                }
                dispatch({type: FILTER_CUST_DELIVORD, input})
            })
            .catch(err => {

            })
    }
}

export function filterCustReceived(payload){
    console.log("Delivered Orders!")
    let input = {}
    return(dispatch) => {
        axios.post(`${connURL}/getCustReceived`,payload)
            .then(response => {
                console.log("Status Code : ", response.status)
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - FILTERING DELIVERED ORDERS!")
                    input = {
                        message: "Filtering Delivered Orders!",
                        orderdetails: response.data[0],
                        orders: response.data[1]
                    }
                    console.log("INPUT = ", input)
                }else{

                }
                dispatch({type: FILTER_CUST_RECORD, input})
            })
            .catch(err => {

            })
    }
}

export function filterCustPreparing(payload){
    console.log("Delivered Orders!")
    let input = {}
    return(dispatch) => {
        axios.post(`${connURL}/getCustPreparing`,payload)
            .then(response => {
                console.log("Status Code : ", response.status)
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - FILTERING DELIVERED ORDERS!")
                    input = {
                        message: "Filtering Delivered Orders!",
                        orderdetails: response.data[0],
                        orders: response.data[1]
                    }
                    console.log("INPUT = ", input)
                }else{

                }
                dispatch({type: FILTER_CUST_PREPORD, input})
            })
            .catch(err => {

            })
    }
}

export function filterCustOutforDelivery(payload){
    console.log("Delivered Orders!")
    let input = {}
    return(dispatch) => {
        axios.post(`${connURL}/getCustOutDelivery`,payload)
            .then(response => {
                console.log("Status Code : ", response.status)
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - FILTERING DELIVERED ORDERS!")
                    input = {
                        message: "Filtering Delivered Orders!",
                        orderdetails: response.data[0],
                        orders: response.data[1]
                    }
                    console.log("INPUT = ", input)
                }else{

                }
                dispatch({type: FILTER_CUST_OFDORD, input})
            })
            .catch(err => {

            })
    }
}

export function filterCustCancelled(payload){
    console.log("Delivered Orders!")
    let input = {}
    return(dispatch) => {
        axios.post(`${connURL}/getCustCancelled`,payload)
            .then(response => {
                console.log("Status Code : ", response.status)
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - FILTERING DELIVERED ORDERS!")
                    input = {
                        message: "Filtering Delivered Orders!",
                        orderdetails: response.data[0],
                        orders: response.data[1]
                    }
                    console.log("INPUT = ", input)
                }else{

                }
                dispatch({type: FILTER_CUST_CANORD, input})
            })
            .catch(err => {

            })
    }
}

export function filterRestNew(payload){
    console.log("New Orders!")
    let input = {}
    return(dispatch) => {
        axios.post(`${connURL}/getRestReceived`, payload)
            .then(response => {
                console.log("Status Code: ", response.status)
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - FILTERING NEW ORDERS!")
                    input = {
                        message: "New Orders!",
                        orderdetails: response.data[0],
                        orders: response.data[1]
                    }
                }else{

                }
                dispatch({type: FILTER_REST_NEW, input})
            })
            .catch(err=>{

            })
        }
}

export function filterRestPast(payload){
    console.log("Past Orders!")
    let input = {}
    return(dispatch) => {
        axios.post(`${connURL}/getRestDelivered`, payload)
            .then(response => {
                console.log("Status Code: ", response.status)
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - FILTERING PAST ORDERS!")
                    input = {
                        message: "Past Orders!",
                        orderdetails: response.data[0],
                        orders: response.data[1]
                    }
                }else{

                }
                dispatch({type: FILTER_REST_PAST, input})
            })
            .catch(err=>{
                
            })
        }
}

export function filterRestCancelled(payload){
    console.log("Cancelled Orders!")
    let input = {}
    return(dispatch) => {
        axios.post(`${connURL}/getRestCancelled`, payload)
            .then(response => {
                console.log("Status Code: ", response.status)
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - FILTERING CANCELLED ORDERS!")
                    input = {
                        message: "CANCELLED Orders!",
                        orderdetails: response.data[0],
                        orders: response.data[1]
                    }
                }else{

                }
                dispatch({type: FILTER_REST_CANCELLED, input})
            })
            .catch(err=>{
                
            })
        }
}

export function addToCart(payload){
    console.log("Attempting Cart Addition")
    let input = {}
    return(dispatch) => {
        axios.defaults.withCredentials = true;
        axios.post(`${connURL}/addToCart`, payload)
            .then(response => {
                console.log("Status Code : ", response.status)
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - ADDING TO CART!")
                    input = {
                        message: "Added to Cart!"
                    }
                }
                else{

                }
                dispatch({type: ADD_TO_CART, input})
            })
            .catch(err => {

            })
    }
}

export function addNewEvent(payload){
    console.log("Attempting New Event Addition")
    let input = {}
    return(dispatch) => {
        axios.defaults.withCredentials = true;
        axios.post(`${connURL}/addEvent`, payload)
            .then(response =>{
                console.log("Status Code : ", response.status)
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - ADDING NEW EVENT!")
                    input = {
                        message: "New Event Added!"
                    }
                }
                else{

                }
                dispatch({type: CREATE_EVENT, input})
            })
            .catch(err => {

            })
    }
}

export function sendMessageRest(payload){
    console.log("Attempting Sending Message")
    let input = {}
    return(dispatch) => {
        axios.defaults.withCredentials = true;
        axios.post(`${connURL}/sendMessage`, payload)
            .then(response =>{
                console.log("Status Code : ", response.status)
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - ADDING NEW EVENT!")
                    input = {
                        message: "Message sent!"
                    }
                    notification["success"]({
                        message: 'Message Sent!'
                    });
                }
                else{

                }
                dispatch({type: SEND_MESSAGE_REST, input})
            })
            .catch(err => {

            })
    }
}

export function createdEvents(payload){
    console.log("Getting Created Events")
    let input = {}
    return(dispatch)=> {
        axios.post(`${connURL}/getCreatedEvents`, payload)
            .then(response => {
                console.log("Status Code : ", response.status)
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - GETTING CREATED EVENTS!")
                    input = {
                        message : "Created Events Are:",
                        events: response.data
                    }
                }else{

                }
                dispatch({type: CREATED_EVENTS, input})
            })
            .catch(err => {

            })
    }
}

export function getRegisteredUsers(payload){
    console.log("Getting registered users:")
    let input = {}
    return(dispatch) => {
        axios.post(`${connURL}/getEventDetails`, payload)
            .then(response => {
                console.log("Status Code : " ,response.status)
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - GETTING REGISTERED USERS!")
                    input = {
                        message: "Registered Users: ",
                        users: response.data
                    }
                }
                else{

                }
                dispatch({type: GET_REG_USERS, input})
            })
            .catch(err => {

            })
    }
}

export function getFollowingUsers(payload){
    console.log("Getting Following Users:")
    let input = {}
    return(dispatch) => {
        axios.post(`${connURL}/getFollowingUsers`, payload)
            .then(respone => {
                console.log("Status Code : ", respone.status)
                if(respone.status === 200){
                    console.log("HERE IN ACTIONS - GETTING FOLLOWING USERS!")
                    input = {
                        message: "Following Users:",
                        users: respone.data
                    }
                }
                else{

                }
                dispatch({type: GET_FOLLOWING_USERS, input})
            })
            .catch(err =>{
                
            })
    }
}

export function uploadDishPhoto(payload){
    console.log("Uploading Dish Photo")
    let input = {}
    return(dispatch) => {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        axios.post(`${connURL}/updateDishPhoto`, payload, config)
            .then( response => {
                console.log("Status Code : ", response.status)
                if(response.status === 200){
                    console.log("HERE IN ACTIONS - UPLOADING DISH PHOTO")
                    input = {
                        message: "Dish Photo Uploaded"
                    }
                    window.location.replace('/restProfile')
                    dispatch({type: DISH_PHOTO, input})
                }
                else{

                }
                
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export function logout(payload){
    console.log("Attempting User Creation!")
    let input = {}
    return(dispatch) =>{
        sessionStorage.removeItem("UserID")
        input = {
            message: "User Logged Out!"
        }
        dispatch({type: CUST_LOGOUT, input})
    }
}