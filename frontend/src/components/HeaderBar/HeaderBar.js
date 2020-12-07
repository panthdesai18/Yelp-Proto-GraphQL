import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css';
import { Input } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import axios from 'axios';
import {logout} from '../../js/actions/index';
import {connect} from 'react-redux';
import { connURL } from '../../Configure';

class HeaderBar extends Component {

    constructor(props){
        super(props);
        this.state = {  
            searchLocation: "",
            locRest: [],
            searchDish: "",
            dishRest: []
        }
    }

    componentDidMount(){
        var data = {
            userid :  window.sessionStorage.getItem("UserID")
        }
        axios.post(`${connURL}/getUserData`,data)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 200){
                    console.log(response.data)
                    console.log("firstname", response.data.firstname)
                    this.setState({
                        firstname : response.data.firstname,   
                        lastname : response.data.lastname,
                        imageSrc : `http://localhost:3001/profimages/`+response.data.profimage           
                    },() => {
                        console.log(this.state.imageSrc)
                    } );
                }else{
                }
            })
            .catch(err => {
                
            })
    }

    handleLogout=(event) => {
        window.location.replace('/custProfile')
    }

    handleRestProfile=(event) => {
        window.location.replace('/restProfile')
    }

    searchDishChangeHandler = (e) => {
        this.setState({
            searchDish :e.target.value
        })
    }

    searchLocChangeHandler = (e) => {
        this.setState({
            searchLocation :e.target.value
        })
    }

    submitLocSearch = (e) => {
        window.location.replace('/searchRest/'+this.state.searchLocation)
    }

    submitDishSearch = (e) => {
        window.location.replace('/searchRest/'+this.state.searchDish)
    }

    submitLandingPage(){
        window.location.replace('/landingPage')
    }

    handleCart(){
        window.location.replace('/cart')
    }

    render() {
        return (
            <div>
                <div style={{borderBottomStyle:"solid", borderBottomColor:"#e6e6e6", borderBottomWidth:1}}>
                    <div style = {{paddingTop:0}}>
                        <img onClick={this.submitLandingPage} style ={{height:40,width:80, marginLeft:20}}src="https://s3-media0.fl.yelpcdn.com/assets/public/default@2x.yji-a536dc4612adf182807e56e390709483.png" alt=""></img>
                        <span><Input onChange={this.searchDishChangeHandler} icon="" placeholder='Dish Name' style={{width:350,marginLeft:40}}/></span>
                        <span><button onClick={this.submitDishSearch} style ={{marginLeft:-18}} class="ui icon button"><i class="search icon"></i></button></span>
                        <span><Input onChange={this.searchLocChangeHandler} type="text" icon="" placeholder='Location' style={{width:350,marginLeft:16}}/></span>
                        <span><button onClick={this.submitLocSearch} style ={{marginLeft:-18}} class="ui icon button"><i class="search icon"></i></button></span>
                        <span style={{marginLeft:50, fontWeight:"bold", fontSize:17}}>For Businesses</span>
                        <span style={{marginLeft:40, fontWeight:"bold", fontSize:17}}>Write A Review</span>
                        <span style={{marginLeft:50}}><FontAwesomeIcon onClick={this.handleCart} icon={faShoppingCart}/></span>
                        <span style={{marginLeft:40}}><FontAwesomeIcon onClick = {this.handleRestProfile} icon={faBell}/></span>
                        <span style={{marginLeft:40}} onClick = {this.handleLogout}><Image src='https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/7e4e0dfd903f/assets/img/default_avatars/user_large_square.png' avatar /></span>
                        <span></span>
                    </div>
                    <div>
                        <Dropdown text='Restaurants' style={{marginLeft:205, paddingTop:10, marginBottom:10}}>
                            <Dropdown.Menu>
                                <Dropdown.Item text='New' />
                                <Dropdown.Item text='Open...' description='ctrl + o' />
                                <Dropdown.Item text='Save as...' description='ctrl + s' />
                                <Dropdown.Item text='Rename' description='ctrl + r' />
                                <Dropdown.Item text='Make a copy' />
                                <Dropdown.Item icon='folder' text='Move to folder' />
                                <Dropdown.Item icon='trash' text='Move to trash' />
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        logout: user => dispatch(logout(user))
    };
}

function mapStateToProps(store){
    return{
        message: store.info
    };
}

const CustLogout = connect(mapStateToProps, mapDispatchToProps)(HeaderBar);
export default CustLogout;
//export default HeaderBar;