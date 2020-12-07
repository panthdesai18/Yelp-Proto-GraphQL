'use strict';
var assert = require('chai').assert;
var app = require('./index');

var expect = require('chai').expect;
var chai = require('chai');
chai.use(require('chai-http'));

var bond = require('chai').request.agent(app);

describe('yelp-proto', function(){
    it("User Login", () => {
        bond.post("/login")
            .send({
                username: "pd@gmail.com",
                password: '12345'
            })
            .then((res) => {
                expect(res.status).to.equal(200)
            })
            .catch(err => {
                console.log(err)
            })
    })
})

describe('yelp-proto', function(){
    it("Get Reviews", () => {
        bond.post("/getReview")
            .send({
                userid: '30'
            })
            .then((res) => {
                expect(res.status).to.equal(200)
            })
            .catch(err => {
                console.log(err)
            })
    })
})

describe('yelp-proto', function(){
    it("Register Event", () => {
        bond.post("/register")
            .send({
                userid: '30',
                eventid: '1014'
            })
            .then((res) => {
                expect(res.status).to.equal(200)
            })
            .catch(err => {
                console.log(err)
            })
    })
})

describe('yelp-proto', function(){
    it("Search Location", () => {
        bond.post("/register")
            .send({
                searchLocation: 'Taco'
            })
            .then((res) => {
                expect(res.status).to.equal(200)
            })
            .catch(err => {
                console.log(err)
            })
    })
})

describe('yelp-proto', function(){
    it("Search Event", () => {
        bond.post("/search Event")
            .send({
                searchEvent: 'Taste'
            })
            .then((res) => {
                expect(res.status).to.equal(200)
            })
            .catch(err => {
                console.log(err)
            })
    })
})

