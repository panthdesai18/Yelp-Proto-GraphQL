import React, { Component } from 'react'
import HeaderBar from '../HeaderBar/HeaderBar';
import { Image } from 'semantic-ui-react'
import Button from 'react-bootstrap/Button';
import {getRestProfile, addDish} from '../../js/actions/index'
import {connect} from 'react-redux'

class AddDish extends Component {

    constructor(){
        super();
        this.state = {  
            restname : "",
            dishname: "",
            dishcategory: "",
            dishprice: "",
            dishdescription:"",
            mainingre:""
        }
    }

    componentDidMount(){
        var data = {
            userid :  window.sessionStorage.getItem("UserID")
        }
        console.log("GETTING RESTAURANT DATA!!!")
        this.props.getRestProfile(data);
        setTimeout(()=> {
            console.log(this.props)
            this.setState({
                restname : this.props.restname,
                description : this.props.description,
                address : this.props.address,
                zipcode : this.props.zipcode,
                email : this.props.email,
                phno : this.props.phno
            })
        }, 2000) 
    }

    dishnameChangeHandler = (e) => {
        this.setState({
            dishname : e.target.value
        })
    }
    
    mainingreChangeHandler = (e) => {
        this.setState({
            mainingre : e.target.value
        })
    }

    dishPriceChangeHandler = (e) => {
        this.setState({
            dishPrice : e.target.value
        })
    }

    categoryChangeHandler = (e) => {
        this.setState({
            category : e.target.value
        })
    }

    dishDescriptionChangeHandler = (e) => {
        this.setState({
            dishdescription :e.target.value
        })
    }

    submitDishAdd = (e) => {
        // var headers = new Headers();
        //prevent page from refresh
        e.preventDefault();
        const data = {
            dishname: this.state.dishname,
            category: this.state.category,
            dishPrice: this.state.dishPrice,
            dishdescription:this.state.dishdescription,
            mainingre:this.state.mainingre,
            userid:window.sessionStorage.getItem("UserID")
        }
        this.props.addDish(data);
    }
    
    render() {
        return (
            <div>
                <div>
                <HeaderBar/>
                </div>
                <div>
                    <div>
                    <div class="row">
                    <div class="column-left-update" >
                        <div style={{marginLeft:190}}>
                            <h3>{this.state.restname}'s Account Settings</h3>
                            <ul style={{listStyleType:"none"}}>
                                <li>
                                    <div style={{height:42}}>
                                        <span style ={{marginLeft:-40}}>Profile</span>
                                    </div>
                                </li>
                                <li>
                                    <div style={{height:42}}>
                                        <span style ={{marginLeft:-40}}>Password</span>
                                    </div>
                                </li>
                                <li>
                                    <div style={{height:42}}>
                                        <span style ={{marginLeft:-40}}>Email / Notifications</span>
                                    </div>
                                </li>
                                <li>
                                    <div style={{height:42}}>
                                        <span style ={{marginLeft:-40}}>Locations</span>
                                    </div>
                                </li>
                                <li>
                                    <div style={{height:42}}>
                                        <span style ={{marginLeft:-40}}>Friends</span>
                                    </div>
                                </li>
                                <li>
                                    <div style={{height:42}}>
                                        <span style ={{marginLeft:-40}}>Privacy Settings</span>
                                    </div>
                                </li>
                                <li>
                                    <div style={{height:42}}>
                                        <span style ={{marginLeft:-40}}>External Applications</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="column-right-update">
                        <h2 style={{color:"#d32323"}}>Add Dish!</h2>
                        <div style={{borderTopStyle:"solid",borderTopWidth:1,borderTopColor:"#e6e6e6",width:700}}>
                            <h4 style={{paddingTop:15}}>Add Dish photo: (Add/Edit)</h4>

                            <Image style={{height:100, width:100,marginTop:-5}} src='https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/7e4e0dfd903f/assets/img/default_avatars/user_large_square.png' size='small' />
                            
                            <h4 style={{marginTop:5}}>Dish Name</h4>
                            <p style={{fontSize:12,color:"#999999", marginTop:-15}}>This field is required.</p>
                            <input type="text" style={{height:30,width:465,marginTop:-5, borderRadius:5}} onChange = {this.dishnameChangeHandler}></input>
                            
                            <h4 style={{marginTop:5}}>Main Ingridients</h4>
                            <p style={{fontSize:12,color:"#999999", marginTop:-15}}>Taco Tuesday Aficionado, The Globetrotting Reviewer</p>
                            <input type="text" style={{height:30,width:465, marginTop:-5, borderRadius:5}} onChange = {this.mainingreChangeHandler}></input>
                            
                            <h4 style={{marginTop:5}}>Dish Price</h4>
                            <p style={{fontSize:12,color:"#999999", marginTop:-15}}>Comma separated phrases (e.g. sushi, Radiohead, puppies)</p>
                            <input type="number" style={{height:30,width:465, marginTop:-5, borderRadius:5}} onChange = {this.dishPriceChangeHandler}></input>
                            
                            <h4 style={{marginTop:5}}>Dish Category</h4>
                            <p style={{fontSize:12,color:"#999999", marginTop:-15}}>What kind of dish is this. Select any one.</p>
                            <input type="text" style={{height:30,width:465, marginTop:-5, borderRadius:5}} onChange = {this.categoryChangeHandler}></input>
                            
                            <h4 style={{marginTop:5}}>Description</h4>
                            <p style={{fontSize:12,color:"#999999", marginTop:-15}}>Tell us something about your dish</p>
                            <input type="text" style={{height:30,width:465, marginTop:-5, borderRadius:5}} onChange = {this.dishDescriptionChangeHandler}></input>
                            
                            <Button onClick={this.submitDishAdd} style={{backgroundColor:"#d32323",width:465, height:34, marginTop:3, color:"white", fontWeight:"bold"}}>Save Changes</Button>

                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        getRestProfile: user => dispatch(getRestProfile(user)),
        addDish: user => dispatch(addDish(user))
    };
}

function mapStateToProps(store){
    return{
        message: store.info,
        userid: store.userid,
        restname: store.restname,
        email : store.email,
        description : store.description,
        address : store.address,
        zipcode : store.zipcode,
        phno: store.phno
    };
}

const GetRestProfile = connect(mapStateToProps, mapDispatchToProps)(AddDish);
export default GetRestProfile;
