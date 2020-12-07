var Cart = require('../models/Cart');
var Dishes = require('../models/Dishes')
const Restaurant = require('../models/Restaurant');

function handle_request(msg, callback){
    console.log(msg)
    console.log("Getting Cart Data!")

    Cart.find({}, function(err, result, fields){
        if(err) throw err;
        console.log("Cart Data is:", result)
        if(result.length > 0){
            var pkg = {
                dishes: []
            }
            for(var i = 0; i< result.length;i++){
                var count = 0;
                Dishes.find({_id:result[i].dishid}, function(err,result1, fields){
                    if(err) throw err;
                    console.log("Dishes Are:", result1)
                    pkg.dishes.push(result1[0])
                    if(count == result.length -1){
                        console.log("PKG IS:", pkg)
                        callback(null, pkg)
                    }
                    else{
                        count++;
                    }
                    
                })
            }
        }
    })

    // Cart.find({}, function(err,result, fields){   
    //     if(err) throw err;
    //     var pkg = {
    //         restaurant: "",
    //         dishes: []
    //     };
    //     console.log("RESULTS ARE",result)
    //     Restaurant.find({_id: result[0].restid}, function(err,result1, fields){
    //         if(err) throw err;
    //         console.log("REST NAME IS", result1[0].restname)
    //         pkg.restaurant = result1[0].restname
    //     })
    //     let cart_data = result
    //     var count = 0;
    //     for( var i =0 ; i<cart_data.length; i++){
    //         Dishes.find({_id:cart_data[i].dishid}, function(err,result2,fields){
    //             if(err) throw err;
    //             console.log("DISH NAME IS", result2[0].dishname)
    //             pkg.dishes.push(result2[0].dishname)
    //             if(count == cart_data.length - 1){
    //                 console.log("PACKAGE IS :", pkg)
    //                 callback(null, pkg)
    //             }
    //             else{
    //                 count++;
    //             }
    //         })
    //     }
    //     // console.log(result)

    //     // callback(null, result)
    //     console.log("After Callback!")
    // })
    
}

exports.handle_request = handle_request;