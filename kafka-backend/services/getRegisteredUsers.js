var Events = require('../models/Events')
var Eventreg = require('../models/EventReg')
var Users = require('../models/User')

function handle_request(msg,callback){
    console.log(msg)
    console.log("Getting Registered Users!")

    // Events.find({eventid:msg.eventid}, function(err, result, fields){
    //     if(err) throw err;
    //     console.log("Events are:", result)
    // })
    Eventreg.find({eventid:msg.eventid}, function(err, result, fields){
        var result2 = []
        if(err) throw err;
        console.log("Events are:", result)
        var count = 0;
        for( var i =0; i< result.length; i++){
            Users.find({_id:result[0].userid}, function(err,result1,field){
                if(err) throw err;
                result2.push(result1)
                if(count == result.length-1){
                    console.log("Registered Users are :", result2)
                    callback(null, result2)
                }
                else{
                    count++;
                }
            })
        }
    })

    // Eventreg.find({userid:msg.userid}, function(err, result, fields){
    //     var result2 = []
    //     if(err) throw err;
    //     console.log("Event Id is:",result);
    //     var count = 0;
    //     for( var i = 0; i < result.length; i++){
    //         Events.find({_id:result[i].eventid}, function(err, result1, field){
    //             if(err) throw err;
    //             result2.push(result1)
    //             if(count == result.length-1){
    //                 console.log("Reg events are:", result2)
    //                 callback(null, result2)
    //             }
    //             else{
    //                 count++;
    //             }

    //         })
    //     }
    //     // callback(null, result)
    //     // console.log("After Callback!")
    // })
}

exports.handle_request = handle_request;