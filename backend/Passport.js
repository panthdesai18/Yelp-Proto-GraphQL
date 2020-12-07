'use strict';
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var Users=require('../models/User');
var Restaurants=require('../models/Restaurant');
var config = require('./Config');

// Setup work and export for the JWT passport strategy
module.exports = function (passport) {
    console.log("Hiii")
    var opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.secret
    };
    passport.use(new JwtStrategy(opts, function (jwt_payload, callback) {
        console.log(jwt_payload);
        if(jwt_payload.user=="restaurant"){
                        console.log("user is authorized")
                        callback(null, jwt_payload);
        }else{{
                        console.log("user is authorized")
                        callback(null, jwt_payload);
        }
        }  
    }))
}