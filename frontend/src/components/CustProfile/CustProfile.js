import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faCamera, faIdCard, faTag, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import HeaderBar from '../HeaderBar/HeaderBar';
import {connect} from 'react-redux';
import { custProfile } from '../../js/actions';


class CustProfile extends Component {

    constructor(){
        super();
        this.state = {  
            firstname : "",
            lastname: "",
            location: "",
            reviews: "",
            image: "",

        }
    }
    
    componentDidMount(){
        var data = {
            userid :  window.sessionStorage.getItem("UserID")
        }
        this.props.custProfile(data);
    }
    submitUpdateProfile = () => {
        this.props.history.push(`/updateCust`);
    };

    submitUpdatePhoto = () => {
        this.props.history.push(`/updatePhoto`);
    };

    submitOrders = () => {
        this.props.history.push('/custOrders');
    }

    submitEvent = () => {
        this.props.history.push('/getRestEvents')
    }

    submitFindFriends = () => {
        this.props.history.push('/usersTab')
    }

    render() {
        // const { activeItem } = this.state;
        console.log(this.props.firstname)
        return (
            <div>
                <HeaderBar/>
                <div style ={{height:200, backgroundColor:"#e6e6e6"}}>
                    <div class="custrow-1">
                        <div class="cust-column-left-1" >
                        <div>
                            <img src={this.props.imageURL} alt="" style ={{height:200, width:200 ,borderRadius:5, marginLeft:200, marginTop:30}}/>
                        </div>
                        </div>
                        <div class="cust-column-middle-1">
                            <div style={{marginTop:50}}>
                            <h1 style={{fontWeight:"bold"}}>{this.props.firstname} &nbsp; {this.props.lastname}.</h1>
                            <h3 style={{fontWeight:"normal", marginTop:-5}}>{this.props.city}, {this.props.country}</h3>
                            <span style={{color:"#e1652a"}}><FontAwesomeIcon icon={faUserFriends}/></span>
                            <span style={{paddingLeft:3}}><strong>0</strong></span>
                            <span style={{paddingLeft:3}}>Friends</span>
                            <span style={{paddingLeft:7, color:"#e1652a"}}><FontAwesomeIcon icon={faStar}/></span>
                            <span style={{paddingLeft:3}}><strong>0</strong></span>
                            <span style={{paddingLeft:3}}>Reviews</span>
                            <span style={{paddingLeft:7, color:"#e1652a"}}><FontAwesomeIcon icon={faCamera}/></span>
                            <span style={{paddingLeft:3}}><strong>0</strong></span>
                            <span style={{paddingLeft:3}}>Photos</span>
                            </div>   
                        </div>
                        <div class="cust-column-right-1">
                            <div style={{marginTop:50}}>
                                <div style={{borderLeftStyle:"solid", borderLeftWidth:1, borderLeftColor:'#c7c7c7', color:"#2e73b5"}}>
                                    <div style={{marginLeft:12}}>
                                        <span><FontAwesomeIcon icon={faCamera}/></span>
                                        <span class="cust-link" style={{paddingLeft:12}} onClick={this.submitUpdatePhoto}>Add Profile Photo</span>
                                    </div>
                                    <div style={{paddingTop:15,marginLeft:12}}>
                                        <span><FontAwesomeIcon icon={faIdCard}/></span>
                                        <span class="cust-link" style={{paddingLeft:12}} onClick={this.submitUpdateProfile} >Update Your Profile</span>
                                    </div>
                                    <div style={{paddingTop:15,marginLeft:12}}>
                                        <span><FontAwesomeIcon icon={faUserPlus}/></span>
                                        <span class="cust-link" style={{paddingLeft:12}} onClick={this.submitFindFriends}>Find Friends</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
                <div class="custrow">
                <div class="cust-column-left">
                <div>
                    <h3 style={{marginTop:50, marginLeft:200}}>{this.props.firstname}&apos;s Profile</h3>
                </div>
                <div style={{marginLeft:160, marginTop:10}}>
                    <ul style={{listStyleType:"none"}}>
                        <li>
                            <div style={{height:42}}>
                                <span><FontAwesomeIcon icon={faUser}/></span>
                                <span style ={{marginLeft:10}}>Profile Overview</span>
                            </div>
                        </li>
                        <li>
                            <div style={{height:42}}>
                                <span><FontAwesomeIcon icon={faUserFriends}/></span>
                                <span style ={{marginLeft:10}}>Friends</span>
                            </div>
                        </li>
                        <li>
                            <div style={{height:42}}>
                                <span><FontAwesomeIcon icon={faStar}/></span>
                                <span style ={{marginLeft:10}}>Reviews</span>
                            </div>
                        </li>
                        <li>
                            <div style={{height:42}}>
                                <span><FontAwesomeIcon icon={faCalendarCheck}/></span>
                                <span style ={{marginLeft:10}} class="cust-link" onClick={this.submitEvent}> Events</span>
                            </div>
                        </li>
                        <li>
                            <div style={{height:42}}>
                                <span><FontAwesomeIcon icon={faTag}/></span>
                                <span style ={{marginLeft:10}} class="cust-link" onClick={this.submitOrders}>Order History</span>
                            </div>
                        </li>
                    </ul>
                </div>    
                </div>
                <div class="cust-column-middle">
                    <div>
                    <h2 style={{color:"#d32323", fontWeight:"bold",}}>Notifications</h2>
                    <p style={{marginTop:-10}}>No new friend requests or compliments at this time.</p>
                    </div>
                    <div style={{borderBottomStyle:"solid", borderBottomWidth:1,marginTop:10, borderBottomColor:"#e6e6e6"}}>
                    <h2 style={{color:"#d32323", fontWeight:"bold", marginTop:-5}}>Recent Activity</h2>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <br></br>
                        <p>We don't have any recent activity or you right now.</p>
                    </div>
                </div>
                <div class="cust-column-right">
                    <div style={{borderLeftStyle:"solid", borderLeftWidth:1, borderLeftColor:'#e6e6e6'}}>
                        <h3 style={{color:"#d32323", marginLeft:12}}>About {this.props.firstname} &nbsp; {this.state.lastname.charAt(0).toUpperCase()}.</h3>
                        <p style={{marginTop:-10, marginLeft:12}}>Some text..</p>
                        <h4 style={{marginTop:0, marginLeft:12}}>Location</h4>
                        <p style={{marginTop:-10, marginLeft:12}}>{this.props.city}, {this.props.country}</p>
                        <h4 style={{marginTop:0, marginLeft:12}}>Yelping Since</h4>
                        <p style={{marginTop:-10, marginLeft:12}}>August 2019</p>
                        <h4 style={{marginTop:0, marginLeft:12}}>Things I love</h4>
                        <p style={{marginTop:-10, marginLeft:12}}>You havent told us yet.. do tell! </p>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        custProfile: user => dispatch(custProfile(user))
    };
}

function mapStateToProps(store){
    return{
        message: store.info,
        userid: store.userid,
        firstname: store.firstname,
        lastname: store.lastname,
        imageURL: store.imageURL,
        email : store.email,
        headline : store.headline,
        city : store.city,
        state :store.state,
        country : store.country,
        birthday : store.birthday,
        address : store.address,
        blog : store.blog,
        zipcode : store.zipcode,
        ilove: store.ilove,
        nickname : store.nickname,
    };
}

const CustomerProfile = connect(mapStateToProps, mapDispatchToProps)(CustProfile);
export default CustomerProfile;

//export default CustProfile;

