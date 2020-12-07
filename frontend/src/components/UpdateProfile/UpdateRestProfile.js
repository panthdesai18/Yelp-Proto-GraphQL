import React, { Component } from 'react'
import HeaderBar from '../HeaderBar/HeaderBar';
import { Image } from 'semantic-ui-react'
import Button from 'react-bootstrap/Button';
import {getRestProfile, postRestProfile} from '../../js/actions/index'
import {connect} from 'react-redux'
import axios from 'axios'
import { connURL } from '../../Configure';

class UpdateRestProfile extends Component {

    constructor(){
        super();
        this.state = {  
            restname : "",
            lastname: "",
            location: "",
            nickname: "",
            description:"",
            ilove:"",
            address:"",
            blog:"",
            email:"",
            city:"",
            state1:"",
            country:"",
            phno:"",
            coord: []
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
    restnameChangeHandler = (e) => {
        this.setState({
            restname : e.target.value
        })
    }
    
    headlineChangeHandler = (e) => {
        this.setState({
            description : e.target.value
        })
    }

    addressChangeHandler = (e) => {
        this.setState({
            address : e.target.value
        })
    }

    emailChangeHandler = (e) => {
        this.setState({
            email : e.target.value
        })
    }

    phnoChangeHandler = (e) => {
        this.setState({
            phno :e.target.value
        })
    }


    submitCustUpd = (e) => {

        e.preventDefault();

        console.log("ADDRESS IS: ", this.state.address)
        axios.post("https://maps.googleapis.com/maps/api/geocode/json?address="+this.state.address+"&key=AIzaSyB5f3E2sHlB_ppiVsOTX1oVaSsI9WJktss")
            .then(response => {
                console.log("GEOCODE: ", response)
                console.log("GEOCODE RESPONSE: ", response.data.results[0].geometry.location.lng)
                const data2 = {
                    userid: window.sessionStorage.getItem("UserID"),
                    coord: response.data.results[0].geometry.location
                }
                console.log("COORDINATES ARE",this.state.coord)
                console.log("status code: ", response.status)
                if(response.status === 200){
                    axios.post(`${connURL}/updateCoordinates`,data2)
                        .then(response => {
                            console.log("Status Code : ",response.status);
                            if(response.status === 200){
                                
                            }else{
                            }
                        })
                        .catch(err => {
                        })
                }
                else{

                }
            })
            .catch(err => {
                console.log(err)
            })
        
        const data = {
            userid: window.sessionStorage.getItem("UserID"), 
            restname : this.state.restname,   
            address: this.state.address,
            email: this.state.email,
            description: this.state.description,
            zipcode: this.state.zipcode,
            phno: this.state.phno,
            coord: this.state.coord
        }
        
        console.log("SENDING THIS DATA TO UPDATE!")
        console.log(data);
        this.props.postRestProfile(data);  
        
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
                        <h2 style={{color:"#d32323"}}>Profile</h2>
                        <div style={{borderTopStyle:"solid",borderTopWidth:1,borderTopColor:"#e6e6e6",width:700}}>
                            <h4 style={{paddingTop:15}}>Your Profile photo (Add/Edit)</h4>

                            <Image style={{height:100, width:100,marginTop:-5}} src='https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/7e4e0dfd903f/assets/img/default_avatars/user_large_square.png' size='small' />
                            
                            <h4 style={{marginTop:5}}>Restaurant Name</h4>
                            <p style={{fontSize:12,color:"#999999", marginTop:-15}}>This field is required.</p>
                            <input type="text" style={{height:30,width:465,marginTop:-5, borderRadius:5}} defaultValue={this.state.restname} onChange = {this.restnameChangeHandler}></input>
                            
                            <h4 style={{marginTop:5}}>Your Description</h4>
                            <p style={{fontSize:12,color:"#999999", marginTop:-15}}>Taco Tuesday Aficionado, The Globetrotting Reviewer</p>
                            <input type="text" style={{height:30,width:465, marginTop:-5, borderRadius:5}} defaultValue={this.state.description} onChange = {this.headlineChangeHandler}></input>
                            
                            <h4 style={{marginTop:5}}>Contact Number</h4>
                            <p style={{fontSize:12,color:"#999999", marginTop:-15}}>Comma separated phrases (e.g. sushi, Radiohead, puppies)</p>
                            <input type="text" style={{height:30,width:465, marginTop:-5, borderRadius:5}} defaultValue={this.state.phno} onChange = {this.iloveChangeHandler}></input>
                            
                            <h4 style={{marginTop:5}}>Your Address</h4>
                            <p style={{fontSize:12,color:"#999999", marginTop:-15}}>Schenectady, NY</p>
                            <input type="text" style={{height:30,width:465, marginTop:-5, borderRadius:5}} defaultValue={this.state.address} onChange = {this.addressChangeHandler}></input>
                            
                            <h4 style={{marginTop:5}}>My Email...</h4>
                            <p style={{fontSize:12,color:"#999999", marginTop:-15}}>Your Email Address.</p>
                            <input type="text" style={{height:30,width:465, marginTop:-5, borderRadius:5}} defaultValue={this.state.email} onChange = {this.emailChangeHandler}></input>
                            
                            <Button onClick={this.submitCustUpd} style={{backgroundColor:"#d32323",width:465, height:34, marginTop:3, color:"white", fontWeight:"bold"}}>Save Changes</Button>

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
        postRestProfile: user => dispatch(postRestProfile(user))
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

const GetRestProfile = connect(mapStateToProps, mapDispatchToProps)(UpdateRestProfile);
export default GetRestProfile;
