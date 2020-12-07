import React, { Component } from 'react'
import HeaderBar from '../HeaderBar/HeaderBar';
import { Image } from 'semantic-ui-react'
import Button from 'react-bootstrap/Button';
import {getProfile, postProfile} from '../../js/actions/index'
import {connect} from 'react-redux'

class UpdateProfile extends Component {

    constructor(){
        super();
        this.state = {  
            firstname : "",
            lastname: "",
            location: "",
            nickname: "",
            headline:"",
            ilove:"",
            address:"",
            blog:"",
            email:"",
            city:"",
            state1:"",
            country:""
        }
    }

    componentDidMount(){
        var data = {
            userid :  window.sessionStorage.getItem("UserID")
        }
        console.log("GETTING THIS DATA!!!")
        this.props.getProfile(data);
        setTimeout(()=> {
            console.log(this.props)
            this.setState({
                firstname : this.props.firstname,
                lastname : this.props.lastname,
                location : this.props.location,
                nickname : this.props.nickname,
                headline : this.props.headline,
                ilove : this.props.ilove,
                address : this.props.address,
                blog : this.props.blog,
                zipcode : this.props.zipcode,
                email : this.props.email,
                city : this.props.city,
                state1 : this.props.state,
                country : this.props.country
            })
        }, 2000)
    //     axios.post('http://localhost:3001/getUserData',data)
    //         .then(response => {
    //             console.log("Status Code : ",response.status);
    //             if(response.status === 200){
    //                 console.log(response.data)
    //                 console.log("firstname", response.data.firstname)
    //                 Object.keys(response.data).forEach(function(key) {
    //                     if(response.data[key] === null || response.data[key] === 'null'){
    //                         console.log(key)
    //                         response.data[key] = ''
    //                     }
    //                 });
    //                 this.setState({
    //                     firstname : response.data.firstname,   
    //                     lastname : response.data.lastname,
    //                     location: response.data.zipcode,
    //                     nickname: response.data.nickname,
    //                     headline: response.data.headline,
    //                     ilove: response.data.ilove,
    //                     address: response.data.address,
    //                     blog: response.data.blog,
    //                     email: response.data.email,
    //                     city: response.data.city,
    //                     state1: response.data.state,
    //                     country: response.data.country            
    //                 });
                    
    //             }else{  
    //             }
    //         })
    //         .catch(err => {
                
    //         }) 
             
    // }
    }
    firstnameChangeHandler = (e) => {
        this.setState({
            firstname : e.target.value
        })
    }

    lastnameChangeHandler = (e) => {
        this.setState({
            lastname : e.target.value
        })
    }
    
    locationChangeHandler = (e) => {
        this.setState({
            location : e.target.value
        })
    }

    nicknameChangeHandler = (e) => {
        this.setState({
            nickname : e.target.value
        })
    }

    headlineChangeHandler = (e) => {
        this.setState({
            headline : e.target.value
        })
    }

    iloveChangeHandler = (e) => {
        this.setState({
            ilove : e.target.value
        })
    }

    addressChangeHandler = (e) => {
        this.setState({
            address : e.target.value
        })
    }

    blogChangeHandler = (e) => {
        this.setState({
            blog : e.target.value
        })
    }

    emailChangeHandler = (e) => {
        this.setState({
            email : e.target.value
        })
    }

    cityChangeHandler = (e) => {
        this.setState({
            city : e.target.value
        })
    }

    stateChangeHandler = (e) => {
        this.setState({
            state1 : e.target.value
        })
    }

    countryChangeHandler = (e) => {
        this.setState({
            country : e.target.value
        })
    }

   

    submitCustUpd = (e) => {
        // var headers = new Headers();
        //prevent page from refresh

        e.preventDefault();
        

        const data = {
            userid: window.sessionStorage.getItem("UserID"), 
            firstname : this.state.firstname,   
            lastname : this.state.lastname,
            location: this.state.zipcode,
            nickname: this.state.nickname,
            headline: this.state.headline,
            ilove: this.state.ilove,
            address: this.state.address,
            blog: this.state.blog,
            email: this.state.email,
            city: this.state.city,
            state: this.state.state1,
            country: this.state.country
        }
        //set the with credentials to true
        
        console.log("SENDING THIS DATA TO UPDATE!")
        console.log(data);
        // axios.defaults.withCredentials = true;
        // //make a post request with the user data
        // axios.post('http://localhost:3001/updateCust',data)
        //     .then(response => {
        //         console.log("Status Code : ",response.status);
        //         if(response.status === 200){
                    
        //         }else{
        //         }
        //     })
        //     .catch(err => {
        //         //document.getElementById("invalidLog").style.display='block';
        //     })
        this.props.postProfile(data);  
        
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
                            <h3>{this.state.firstname}'s Account Settings</h3>
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
                            
                            <h4 style={{marginTop:5}}>First Name</h4>
                            <p style={{fontSize:12,color:"#999999", marginTop:-15}}>This field is required.</p>
                            <input type="text" style={{height:30,width:465,marginTop:-5, borderRadius:5}} defaultValue={this.state.firstname} onChange = {this.firstnameChangeHandler}></input>
                            
                            <h4 style={{marginTop:5}}>Last Name</h4>
                            <p style={{fontSize:12,color:"#999999", marginTop:-15}}>This field is required. Only your last initial will show on your profile.</p>
                            <input type="text" style={{height:30,width:465,marginTop:-5, borderRadius:5}} defaultValue={this.state.lastname} onChange = {this.lastnameChangeHandler}></input>

                            <h4 style={{marginTop:5}}>Nickname</h4>
                            <p style={{fontSize:12,color:"#999999", marginTop:-15}}>The Boss, Calamity Jane, The Prolific Reviewer</p>
                            <input type="text" style={{height:30,width:465, marginTop:-5, borderRadius:5}} defaultValue={this.state.nickname} onChange = {this.nicknameChangeHandler}></input>
                            
                            <h4 style={{marginTop:5}}>Your headline</h4>
                            <p style={{fontSize:12,color:"#999999", marginTop:-15}}>Taco Tuesday Aficionado, The Globetrotting Reviewer</p>
                            <input type="text" style={{height:30,width:465, marginTop:-5, borderRadius:5}} defaultValue={this.state.headline} onChange = {this.headlineChangeHandler}></input>
                            
                            <h4 style={{marginTop:5}}>I love...</h4>
                            <p style={{fontSize:12,color:"#999999", marginTop:-15}}>Comma separated phrases (e.g. sushi, Radiohead, puppies)</p>
                            <input type="textarea" style={{height:80,width:465, marginTop:-5, borderRadius:5}} defaultValue={this.state.ilove} onChange = {this.iloveChangeHandler}></input>
                            
                            <h4 style={{marginTop:5}}>My Hometown</h4>
                            <p style={{fontSize:12,color:"#999999", marginTop:-15}}>Schenectady, NY</p>
                            <input type="text" style={{height:30,width:465, marginTop:-5, borderRadius:5}} defaultValue={this.state.address} onChange = {this.addressChangeHandler}></input>
                            
                            <h4 style={{marginTop:5}}>My Blog Or Website</h4>
                            <p style={{fontSize:12,color:"#999999", marginTop:-15}}>www.example.com/myawesomeblog</p>
                            <input type="text" style={{height:30,width:465, marginTop:-5, borderRadius:5}} defaultValue={this.state.blog} onChange = {this.blogChangeHandler}></input>
                            
                            <h4 style={{marginTop:5}}>Yelping Since..</h4>
                            <p style={{fontSize:12,color:"#999999", marginTop:-15}}>This field cannot be edited.</p>
                            <input type="text" style={{height:30,width:465, marginTop:-5, borderRadius:5}} defaultValue={this.state.firstname} ></input>
                            
                            <h4 style={{marginTop:5}}>My Email...</h4>
                            <p style={{fontSize:12,color:"#999999", marginTop:-15}}>Your Email Address.</p>
                            <input type="text" style={{height:30,width:465, marginTop:-5, borderRadius:5}} defaultValue={this.state.email} onChange = {this.emailChangeHandler}></input>
                            
                            <h4 style={{marginTop:5}}>City</h4>
                            <p style={{fontSize:12,color:"#999999", marginTop:-15}}>City you live in.</p>
                            <input type="text" style={{height:30,width:465, marginTop:-5, borderRadius:5}} defaultValue={this.state.city} onChange = {this.cityChangeHandler}></input>
                            
                            <h4 style={{marginTop:5}}>State</h4>
                            <p style={{fontSize:12,color:"#999999", marginTop:-15}}>State you live in.</p>
                            <input type="text" style={{height:30,width:465, marginTop:-5, borderRadius:5}} defaultValue={this.state.state1} onChange = {this.stateChangeHandler}></input>
                            
                            <h4 style={{marginTop:5}}>Country</h4>
                            <p style={{fontSize:12,color:"#999999", marginTop:-15}}>Country you live in.</p>
                            <input type="text" style={{height:30,width:465, marginTop:-5, borderRadius:5}} defaultValue={this.state.country} onChange = {this.countryChangeHandler}></input>
                            
                            <h4 style={{marginTop:5}}>Date of birth</h4>
                            <p style={{fontSize:12,color:"#999999", marginTop:-15}}>When were you born.</p>
                            <input type="text" style={{height:30,width:465, marginTop:-5, borderRadius:5}} defaultValue={this.state.firstname}></input>
                            
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
        getProfile: user => dispatch(getProfile(user)),
        postProfile: user => dispatch(postProfile(user))
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

const GetCustProfile = connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
export default GetCustProfile;
