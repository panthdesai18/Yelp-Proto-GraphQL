const graphql = require('graphql');
const _ = require('lodash');
const { ObjectId } = require('mongodb');
var { mongoose } = require('mongoose');
var { Cart } = require('./../models/Cart');
var Dishes = require('./../models/Dishes');
var { OrderDetails } = require('./../models/OrderDetails');
var Orders  = require('./../models/Orders');
var Restaurant = require('./../models/Restaurant');
var { Reviews } = require('./../models/Reviews');
var User = require('./../models/User');
const bcrypt = require('bcrypt');


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
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
        email: { type: GraphQLString },
        zipcode: { type: GraphQLInt },
        address: { type: GraphQLString },
        city: { type: GraphQLString },
        country: { type: GraphQLString },
        headline: { type: GraphQLString },
        ilove: { type: GraphQLString },
        nickname: { type: GraphQLString },
        state: { type: GraphQLString },
        profimage: { type: GraphQLString }
    })
});

const RestaurantType = new GraphQLObjectType({
    name: 'Restaurants',
    fields: () => ({
        _id: { type: GraphQLString },
        restname: { type: GraphQLString },
        email: { type: GraphQLString },
        zipcode: { type: GraphQLInt },
        password: { type: GraphQLString },
        address: { type: GraphQLString },
        description: { type: GraphQLString },
        phno: { type: GraphQLString },
        typedeliv: { type: GraphQLBoolean },
        typedinein: { type: GraphQLBoolean },
        typepickup: { type: GraphQLBoolean },
        lat: { type: GraphQLString },
        lng: { type: GraphQLString },
        restphoto: { type: GraphQLString },
        restphoto2: { type: GraphQLString },
        restphoto3: { type: GraphQLString },
        restphoto4: { type: GraphQLString }
    })
});

const OrdersType = new GraphQLObjectType({
    name: 'Orders',
    fields: () => ({
        _id: { type: GraphQLString },
        userid: { type: GraphQLString },
        restid: { type: GraphQLString },
        status: { type: GraphQLString },
        ordertype: { type: GraphQLString }
    })
})

const ReviewsType = new GraphQLObjectType({
    name: 'Reviews',
    fields: () => ({
        _id: { type: GraphQLString },
        reviewno: { type: GraphQLInt },
        reviewdesc: { type: GraphQLString },
        restid: { type: GraphQLString },
        userid: { type: GraphQLString }
    })
})

const DishesType = new GraphQLObjectType({
    name: 'Dishes',
    fields: () => ({
        _id: { type: GraphQLString },
        dishname: { type: GraphQLString },
        category: { type: GraphQLString },
        price: { type: GraphQLInt },
        description: { type: GraphQLString },
        mainingre: { type: GraphQLString },
        restid : { type: GraphQLString }
    })
})

const RestaurantSearchType = new GraphQLObjectType({
    name: 'RestaurantSearch',
    fields: () => ({
        city: { type: GraphQLString },
        properties: { type: new GraphQLList(RestaurantType) }
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
        restname: { type: GraphQLString },
        // properties: { type: new GraphQLList(PropertyType) }
    })
});

const RestaurantSearch = new GraphQLObjectType({
    name: 'GetRestaurantSearch',
    fields: () => ({
        ownerEmail: { type: GraphQLString },
        // properties: { type: new GraphQLList(PropertyType) }
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
        restaurantLogin: {
            type: RestaurantType,
            args: {
                email: {type: GraphQLString},
                password: {type: GraphQLString}
            }
        },
        userLogin: {
            type: ProfileType,
            args: {
                email: {type: GraphQLString},
                password: {type: GraphQLString}
            }
        },
        getRestaurantOrders: {
            type: new GraphQLList(OrdersType),
            args: {
                _id: { type: GraphQLString }
            },
            async resolve(parent, args){
                return await Orders.find({
                    restid: ObjectId(args._id)
                })
            }
        },
        getCustomerOrders: {
            type: new GraphQLList(OrdersType),
            args: {
                _id: { type: GraphQLString }
            },
            async resolve(parent, args){
                return await Orders.find({
                    userid: ObjectId(args._id)
                })
            }
        },
        getRestaurantDishes: {
            type: new GraphQLList(OrdersType),
            args: {
                _id: { type: GraphQLString }
            },
            async resolve(parent, args){
                return await Dishes.find({
                    _id: ObjectId(args._id)
                })
            }
        },
        getRestaurantDetails: {
            type: new GraphQLList(RestaurantType),
            args: {
                _id: {type: GraphQLString}
            },
            async resolve(parent, args){
                return await Restaurant.find({
                    _id: ObjectId(args._id)
                })
            }       
        },
        getCustomerProfile : {
            type: new GraphQLList(ProfileType),
            args : {
                _id: {type : GraphQLString}
            },
            async resolve(parent, args){
                return await User.find({
                    _id: ObjectId(args._id)
                })
            }
        },
        getRestaurantReviews: {
            type: new GraphQLList(ReviewsType),
            args : {
                restid: {type: GraphQLString}
            },
            async resolve(parent, args){
                return await Reviews.find({
                    restid: ObjectId(args.restid)
                })
            }
        },
        restaurantSearch: {
            type: new GraphQLList(RestaurantType),
            args: {
                restaurant_name: { type: GraphQLString }
            },
            async resolve(parent, args) {
                return await Restaurant.find({
                    restname: args.restaurant_name
                })
            }
        },
        filterRestaurantOrders: {
            type: new GraphQLList(OrdersType),
            args: {
                status: {type: GraphQLString},
                restid: {type: GraphQLString}
            },
            async resolve(parent, args){
                return await Orders.find({
                    status: args.status, restid: args.restid
                })
            }
        },
        filterRestaurantSearch : {
            type: new GraphQLList(RestaurantType),
            args: {
                typedeliv: {type: GraphQLBoolean},
                typedinein: {type: GraphQLBoolean},
                typepickup: {type: GraphQLBoolean}
            },
            async resolve(parent, args){
                return await Restaurant.find({
                    typedeliv: args.typedeliv, typepickup: args.typepickup, typedinein: args.typedinein
                })
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
                email: {type: GraphQLString},
                firstname: { type: GraphQLString },
                lastname: { type: GraphQLString },
                nickname: { type: GraphQLString },
                headline: { type: GraphQLString },
                ilove: { type: GraphQLString },
                address: { type: GraphQLString },
                city: { type: GraphQLString },
                country: { type: GraphQLString }
            },
            resolve(parent, args) {
                let profile = {
                    firstname: args.firstname,
                    lastname: args.lastname,
                    nickname: args.nickname,
                    headline: args.headline,
                    city: args.city,
                    country: args.country,
                    company: args.company,
                    ilove: args.ilove,
                    email: args.email
                };

                return User.findOneAndUpdate({
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
        updateRestaurantProfile: {
            type: RestaurantType,
            args: {
                description: {type: GraphQLString},
                restname: { type: GraphQLString },
                phno: { type: GraphQLString },
                address: { type: GraphQLString },
                email: { type: GraphQLString },
                _id: {type: GraphQLString}
            },
            resolve(parent, args) {
                let profile = {
                    description: args.firstname,
                    restname: args.lastname,
                    phno: args.nickname,
                    address: args.headline,
                    email: args.city
                };

                return User.findOneAndUpdate({
                    _id: args._id
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
        addDish: {
            type: DishesType,
            args: {
                dishname: { type: GraphQLString },
                category: {type: GraphQLString},
                price: {type: GraphQLInt},
                description : {type: GraphQLString},
                mainingre: {type: GraphQLString},
                restid: {type: GraphQLString},
                message: {type: GraphQLString}
            },
            resolve(parent, args) {

                return Dishes.create( args ,function (err, doc) {
                    console.log("in mongo")
                    if (err) {
                        console.log('in error')
                        return { error: 'error in update' }
                    }
                    else {
                        message: args.message
                    }
                })

            }
        },
        addOrder: {
            type: OrdersType,
            args: {
                userid: { type: GraphQLString },
                restid: { type: GraphQLString },
                status: { type: GraphQLString },
                ordertype: { type: GraphQLString }
            },
            resolve(parent, args) {

                return Orders.create( args ,function (err, doc) {
                    console.log("in mongo")
                    if (err) {
                        console.log('in error')
                        return { error: 'error in update' }
                    }
                    else {
                        message: args.message
                    }
                })

            }
        },
        addReview: {
            type: ReviewsType,
            args: {
                reviewno: { type: GraphQLInt },
                reviewdesc: { type: GraphQLString },
                restid: { type: GraphQLString },
                userid: { type: GraphQLString }
            },
            resolve(parent, args) {

                return Orders.create( args ,function (err, doc) {
                    console.log("in mongo")
                    if (err) {
                        console.log('in error')
                        return { error: 'error in update' }
                    }
                    else {
                        message: args.message
                    }
                })

            }
        },
        updateOrderStatus: {
            type: OrdersType,
            args: {
                _id: {type: GraphQLString},
                status: { type: GraphQLString }
            },
            resolve(parent, args) {
                let profile = {
                    status : args.status
                };
                return Orders.findOneAndUpdate({
                    email: args.email
                }, { $set: profile }, function (err, doc) {
                    console.log("in mongo")
                    if (err) {
                        console.log('in error')
                        return { error: 'error in update' }
                    }
                    else {
                        message: args.message
                    }
                })

            }
        },
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});