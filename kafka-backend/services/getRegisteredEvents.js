var Events = require('../models/Events')
var Eventreg = require('../models/EventReg')

function handle_request(msg,callback){
    console.log(msg)
    console.log("Getting Registered Events!")

    Eventreg.find({userid:msg.userid}, function(err, result, fields){
        var result2 = []
        if(err) throw err;
        console.log("Event Id is:",result);
        var count = 0;
        for( var i = 0; i < result.length; i++){
            Events.find({_id:result[i].eventid}, function(err, result1, field){
                if(err) throw err;
                result2.push(result1)
                if(count == result.length-1){
                    console.log("Reg events are:", result2)
                    callback(null, result2)
                }
                else{
                    count++;
                }

            })
        }
        
    })
}

exports.handle_request = handle_request;