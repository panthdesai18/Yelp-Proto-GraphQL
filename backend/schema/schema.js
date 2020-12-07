const graphql = require('graphql');
const _ = require('lodash');
// var { mongoose } = require('./../mongoose');
var { Cart } = require('./../models/Cart');
var { Dishes } = require('./../models/Dishes');
var { OrderDetails } = require('./../models/OrderDetails');
var { Orders } = require('./../models/Orders');
var { Restaurant } = require('./../models/Restaurant');
var { Reviews } = require('./../models/Reviews');
var { User } = require('./../models/User');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLBoolean,
} = graphql;

const ProfileType = new GraphQLObjectType({
    name: 'UserProfiles',
    fields: () => ({
        email: { type: GraphQLString },
        fname: { type: GraphQLString },
        lname: { type: GraphQLString },
        phoneNumber: { type: GraphQLString },
        aboutMe: { type: GraphQLString },
        city: { type: GraphQLString },
        country: { type: GraphQLString },
        company: { type: GraphQLString },
        school: { type: GraphQLString },
        languages: { type: GraphQLString },
        gender: { type: GraphQLString },
        profilePhoto: { type: GraphQLString },
        isOwner: { type: GraphQLString },
    })
});

const PropertyType = new GraphQLObjectType({
    name: 'Properties',
    fields: () => ({
        _id: { type: GraphQLString },
        ownerEmail: { type: GraphQLString },
        headline: { type: GraphQLString },
        description: { type: GraphQLString },
        streetAddress: { type: GraphQLString },
        city: { type: GraphQLString },
        propertyType: { type: GraphQLString },
        bedroom: { type: GraphQLString },
        accommodates: { type: GraphQLString },
        bathroom: { type: GraphQLString },
        amenitiesDetails: { type: GraphQLString },
        kitchenDetails: { type: GraphQLString },
        generalDetails: { type: GraphQLString },
        rate: { type: GraphQLString },
        availableFrom: { type: GraphQLString },
        availableTill: { type: GraphQLString },
        photos: { type: GraphQLString },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString },
    })
});

const PropertySearchType = new GraphQLObjectType({
    name: 'SearchProperty',
    fields: () => ({
        city: { type: GraphQLString },
        sDate: { type: GraphQLString },
        eDate: { type: GraphQLString },
        guest: { type: GraphQLInt },
        s1Date: { type: GraphQLString },
        e1Date: { type: GraphQLString },
        filterPrice: { type: GraphQLString },
        bedroom: { type: GraphQLString },
        pageNo: { type: GraphQLInt },
        totalPages: { type: GraphQLString },
        properties: { type: new GraphQLList(PropertyType) }
    })
});

const BookedType = new GraphQLObjectType({
    name: 'BookedProperty',
    fields: () => ({
        ownerEmail: { type: GraphQLString },
        headline: { type: GraphQLString },
        streetAddress: { type: GraphQLString },
        city: { type: GraphQLString },
        propertyId: { type: GraphQLString },
        travellerId: { type: GraphQLString },
        guest: { type: GraphQLInt },
        cost: { type: GraphQLInt },
        photos: { type: GraphQLString },
        bookedFrom: { type: GraphQLString },
        bookedTill: { type: GraphQLString },
        message: { type: GraphQLString },
        error: { type: GraphQLString },
    })
});

const BookedPropertiesType = new GraphQLObjectType({
    name: 'GetBookedProperties',
    fields: () => ({
        travellerId: { type: GraphQLString },
        sDate: { type: GraphQLString },
        eDate: { type: GraphQLString },
        propertyName: { type: GraphQLInt },
        pageNo: { type: GraphQLInt },
        totalPages: { type: GraphQLString },
        properties: { type: new GraphQLList(BookedType) }
    })
});

const OwnerPropertiesType = new GraphQLObjectType({
    name: 'GetOwnerProperties',
    fields: () => ({
        ownerEmail: { type: GraphQLString },
        properties: { type: new GraphQLList(PropertyType) }
    })
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        profile: {
            type: ProfileType,
            args: { email: { type: GraphQLString } },
            resolve(parent, args) {
                console.log("hi2")
                console.log(args)
                return UserProfiles.findOne({
                    email: args.email
                }, function (err, userProfile) {
                    if (err) {
                        return err
                    }
                    if (userProfile) {
                        console.log(userProfile)
                        return userProfile;
                    }
                })
            }
        },
        searchProperty: {
            type: PropertySearchType,
            args: {
                city: { type: GraphQLString },
                sDate: { type: GraphQLString },
                eDate: { type: GraphQLString },
                guest: { type: GraphQLInt },
                s1Date: { type: GraphQLString },
                e1Date: { type: GraphQLString },
                filterPrice: { type: GraphQLString },
                bedroom: { type: GraphQLString },
                pageNo: { type: GraphQLInt },
            },
            async resolve(parent, args) {
                console.log(args)
                var pageNo = args.pageNo
                var size = 10
                var query = {}
                var bedroomDetail = {
                    'bedroom': { $gte: '0' }
                }
                query.skip = size * (pageNo - 1)
                query.limit = size
                if (args.filterPrice == "maxToLow") {
                    query.sort = { 'rate': -1 }
                } else if (args.filterPrice == "lowToMax") {
                    query.sort = { 'rate': 1 }
                }
                if (args.bedroom != "") {
                    bedroomDetail = {
                        'bedroom': args.bedroom
                    }
                }

                var res1 = null
                let count = await Properties.count({
                    'city': { $regex: new RegExp(args.city, "i") },
                    'accommodates': { $gte: args.guest },
                    'availableFrom': { $lte: args.sDate },
                    'availableTill': { $gte: args.eDate },
                    'booked': {
                        $not: {
                            $elemMatch: { from: { $lt: args.eDate }, to: { $gt: args.sDate } }
                        }
                    },
                    'bedroom': bedroomDetail.bedroom
                })

                var totalPages = Math.ceil(count / size)
                let property = await Properties.find({
                    'city': { $regex: new RegExp(args.city, "i") },
                    'accommodates': { $gte: args.guest },
                    'availableFrom': { $lte: args.sDate },
                    'availableTill': { $gte: args.eDate },
                    'booked': {
                        $not: {
                            $elemMatch: { from: { $lt: args.eDate }, to: { $gt: args.sDate } }
                        }
                    },
                    'bedroom': bedroomDetail.bedroom
                }, {}, query)
                console.log(property)
                return {
                    "properties": property,
                    "totalPages": totalPages
                }

            }
        },
        travellerProperties: {
            type: BookedPropertiesType,
            args: {
                propertyName: { type: GraphQLString },
                sDate: { type: GraphQLString },
                eDate: { type: GraphQLString },
                travellerId: { type: GraphQLString },
                pageNo: { type: GraphQLInt },
            },
            async resolve(parent, args) {
                console.log(args)
                var pageNo = args.pageNo
                var size = 5
                var query = {}
                query.skip = size * (pageNo - 1)
                query.limit = size
                var propertyDetail = {
                    'travellerId': args.travellerId,
                }
                if (args.propertyName) {
                    propertyDetail.headline = { $regex: new RegExp(args.propertyName, "i") }
                }
                if (args.sDate) {
                    propertyDetail.bookedFrom = { $gte: args.sDate }
                }
                if (args.eDate) {
                    propertyDetail.bookedTill = { $lte: args.eDate }
                }

                var res1 = null
                let count = await BookedProperties.count(propertyDetail)

                var totalPages = Math.ceil(count / size)
                let property = await BookedProperties.find(propertyDetail, {}, query)
                console.log("In get traveller bookings")
                console.log(property)
                return {
                    "properties": property,
                    "totalPages": totalPages
                }

            }
        },
        ownerBookings: {
            type: BookedPropertiesType,
            args: {
                propertyName: { type: GraphQLString },
                sDate: { type: GraphQLString },
                eDate: { type: GraphQLString },
                ownerEmail: { type: GraphQLString },
                pageNo: { type: GraphQLInt },
            },
            async resolve(parent, args) {
                console.log(args)
                var pageNo = args.pageNo
                var size = 5
                var query = {}
                query.skip = size * (pageNo - 1)
                query.limit = size
                var propertyDetail = {
                    'ownerEmail': args.ownerEmail,
                }
                if (args.propertyName) {
                    propertyDetail.headline = { $regex: new RegExp(args.propertyName, "i") }
                }
                if (args.sDate) {
                    propertyDetail.bookedFrom = { $gte: args.sDate }
                }
                if (args.eDate) {
                    propertyDetail.bookedTill = { $lte: args.eDate }
                }

                var res1 = null
                let count = await BookedProperties.count(propertyDetail)

                var totalPages = Math.ceil(count / size)
                let property = await BookedProperties.find(propertyDetail, {}, query)
                console.log("get bookings of properties")
                console.log(property)
                return {
                    "properties": property,
                    "totalPages": totalPages
                }

            }
        },
        ownerProperties: {
            type: OwnerPropertiesType,
            args: {
                ownerEmail: { type: GraphQLString },
            },
            async resolve(parent, args) {

                let property = await Properties.find({
                    'ownerEmail': args.ownerEmail
                })
                console.log("In Get Owner Properties Request")
                console.log(property)
                return { 'properties': property }


            }
        }
    }
});


const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        updateProfile: {
            type: ProfileType,
            args: {
                email: { type: GraphQLString },
                fname: { type: GraphQLString },
                lname: { type: GraphQLString },
                phoneNumber: { type: GraphQLString },
                aboutMe: { type: GraphQLString },
                city: { type: GraphQLString },
                country: { type: GraphQLString },
                company: { type: GraphQLString },
                school: { type: GraphQLString },
                languages: { type: GraphQLString },
                gender: { type: GraphQLString },
            },
            resolve(parent, args) {
                let profile = {
                    fname: args.fname,
                    lname: args.lname,
                    phoneNumber: args.phoneNumber,
                    aboutMe: args.aboutMe,
                    city: args.city,
                    country: args.country,
                    company: args.company,
                    school: args.school,
                    languages: args.languages,
                    gender: args.gender,
                };

                return UserProfiles.findOneAndUpdate({
                    email: args.email
                }, { $set: profile }, function (err, doc) {
                    console.log("in mongo")
                    if (err) {
                        console.log('in error')
                        return { error: 'error in update' }
                    }
                    else {
                        console.log('Profile Updated Successfully!')
                        console.log(doc)
                        return { email: args.email }
                    }
                })

            }
        },
        bookProperty: {
            type: BookedType,
            args: {
                propertyId: { type: GraphQLString },
                ownerEmail: { type: GraphQLString },
                travellerId: { type: GraphQLString },
                sDate: { type: GraphQLString },
                eDate: { type: GraphQLString },
                guest: { type: GraphQLInt },
                cost: { type: GraphQLInt },
            },
            async resolve(parent, args) {
                console.log(args)
                var data = await Properties.findOneAndUpdate({
                    '_id': args.propertyId,
                    'accommodates': { $gte: args.guest },
                    'availableFrom': { $lte: args.sDate },
                    'availableTill': { $gte: args.eDate },
                    'booked': {
                        $not: {
                            $elemMatch: { from: { $lt: args.eDate }, to: { $gt: args.sDate } }
                        }
                    }
                }, { $push: { "booked": { from: args.sDate, to: args.eDate, travellerEmail: args.travellerId } } })

                if (data) {
                    var bookproperty = new BookedProperties({
                        ownerEmail: data.ownerEmail,
                        headline: data.headline,
                        streetAddress: data.streetAddress,
                        city: data.city,
                        propertyId: data._id,
                        travellerId: args.travellerId,
                        guest: args.guest,
                        cost: args.cost,
                        photos: data.photos,
                        bookedFrom: args.sDate,
                        bookedTill: args.eDate

                    })
                    bookproperty.save();
                    console.log("In Book Property Request")
                    console.log( {'message': 'Property bookeed successfully' })
                    return { 'message': "Property bookeed successfully!" }
                } else {
                    console.log("In Book Property Request")
                    console.log( {'error': 'Your selected dates are not available' })
                    return { 'error': "Your selected dates are not available" }
                }
                
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});