var OrderDetails = require('../models/OrderDetails')
var Orders = require('../models/Orders')
var Dishes = require('../models/Dishes')
const { count } = require('../models/Dishes')
const { resolve, reject } = require('bluebird')

function handle_request(msg,callback){
    console.log(msg)
    console.log("Getting Rest Orders!")
    result_q2 = [];
    
    var count1=0;
    Orders.find({userid:msg.userid}, {_id:1},function(err, result){
        if(err) throw err;
        return result;
        // console.log(result);
        
    }).then(result => {
        console.log(result)
        for( var i =0; i < result.length;i++){
            // console.log("IN FOR",result[i])
            
            OrderDetails.find({orderid:result[i]._id}, {orderid:1,dishid:1,quantity:1}, function(err, result1){
                if(err) throw err;
                return result1;
                // console.log("IN second Query", result1)
            })
            .then(result1 => {
                for(var j in result1){
                    // console.log(result1[j])
                    Dishes.find({_id:result1[j].dishid},function(err, result3){
                        if(err) throw err;
                        return result3;
                    })
                    .then(result3 => {
                        result_q2.push(...result3)
                        // console.log("REsult 3",result3)                        
                    })
                }
            })
        }

        setTimeout(()=>{
            console.log(result_q2)
            callback(null, result_q2)
        }, 1000)
    })
    // var user = "SELECT orderid,dishid,quantity from yelp_proto.orderdetails where orderid in (SELECT orderid FROM yelp_proto.order where restid ='"+req.body.userid+"'); ";
    // Orders.find({userid:msg.userid}, function(err, result){
    //     if(err) throw err;
    //     for( var i =0; i< result.length;i++){
    //         OrderDetails.find({orderid:result[i]._id}, function(err, result1){
    //             if(err) throw err;
    //             console.log("RESULT 2 is ", result1)
    //             var len = result1.length;
    //             var count = 0
    //             var finalresult = [];
    //             if(result1.length>0){
    //                 result1.map( cart2 => {
    //                     console.log("CART IS::::::::", cart2)
    //                     cart = {...cart2._doc}
    //                     Dishes.find({_id:cart2.dishid}, function(err, result2){
    //                         if(err) throw err;
    //                         if(result2){
    //                             cart["dishName"] = result2[0].dishname
    //                             cart["dishPhoto"] = result2[0].dishPhoto
    //                             console.log("Cart is", cart)
    //                             finalresult.push(cart)
    //                             count++;
    //                         }
    //                         if(count == len){
    //                             console.log(console.log("FINAL RESULT is",finalresult))
    //                         }
    //                     })
    //                 })
    //                 console.log("FINAL _________________", finalresult)
    //             }
    //         })
    //     }
    // })
}

exports.handle_request = handle_request;