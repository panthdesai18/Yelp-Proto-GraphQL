import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col' 
import Button from 'react-bootstrap/Button'
import GoogleButton from 'react-google-button'
import TextField from '@material-ui/core/TextField';
import {signUp} from '../../js/actions/index'
import {connect} from 'react-redux'

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            fistname : "",
            lastname : "",
            username : "",
            password : "",
            location : "",
        }
        //Bind the handlers to this class
        this.firstnameChangeHandler = this.firstnameChangeHandler.bind(this);
        this.lastnameChangeHandler = this.lastnameChangeHandler.bind(this);
        this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        this.locationChangeHandler = this.locationChangeHandler.bind(this);
        //this.submitLogin = this.submitLogin.bind(this);
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
    usernameChangeHandler = (e) => {
        this.setState({
            username : e.target.value
        })
    }
    passwordChangeHandler = (e) => {
        this.setState({
            password : e.target.value
        })
    }
    locationChangeHandler = (e) => {
        this.setState({
            location : e.target.value
        })
    }
    submitLogin = (e) => {
        this.props.history.push('/login');
    }
    submitSignUp = (e) => {
        // var headers = new Headers();
        //prevent page from refresh
        e.preventDefault();
        const data = {
            firstname: this.state.firstname,
            lastname : this.state.lastname,
            username : this.state.username,
            password : this.state.password,
            location : this.state.location
        }
        this.props.signUp(data);
        //set the with credentials to true
        // axios.defaults.withCredentials = true;
        // //make a post request with the user data
        // axios.post('http://localhost:3001/signUp',data)
        //     .then(response => {
        //         console.log("Status Code : ",response.status);
        //         if(response.status === 200){
                    
        //         }else{
        //         }
        //     })
        //     .catch(err => {
        //         //document.getElementById("invalidLog").style.display='block';
        //     })
    }
    render() {
        return (
            <div>
                <div class="header">
                <img src="https://s3-media0.fl.yelpcdn.com/assets/public/default.yji-e02121e4b885bf89645bdc9ea402a681.png" alt=""></img>
                </div>
                <div>
                    <div class = "column" style ={{ textAlign : "center", width : "600", height: "auto", paddingTop: 30}}>   
                        <div>
                            <h2 class = "signinh3" > Sign Up for Yelp</h2>
                            <br></br>
                            <h4 style = {{marginTop:-30}}>Connect with great local businesses</h4>
                            <br></br>
                        </div>
                        <div>
                            <div>
                                <h6 style = {{marginTop:-20}}> By continuing, you agree to Yelp's Terms of Service and</h6>
                                <br></br>
                                <h6 style = {{marginTop:-40}}>acknowledge Yelp's Privacy Policy. </h6>
                                <br></br>
                            </div>
                            <div style = {{marginLeft:"28%", marginTop:-30,backgroundColor:"black", width:300, height:40,textAlign:"center",color:"white", fontWeight:"bold"}}>
                                Continue with Apple
                                <br></br>
                            </div>
                            <div style = {{marginLeft:"28%", marginTop:15,backgroundColor:"white", width:300, height:40,textAlign:"center",color:"#43609C", fontWeight:"bold", borderStyle:"solid"}}>
                                Continue with Facebook
                                <br></br>
                            </div>    
                            <div style = {{marginTop:10}}>
                                <GoogleButton style={{marginLeft:"28%",marginTop:"", height:50, width:300, alignContent:"center"}} label = 'Continue with Google'/>
                            </div>
                        </div>
                        <div><h6> Don't worry, we never post without your permission.</h6></div>
                        <div><legend style = {{marginLeft:340}}>OR</legend><br></br></div>
                        <div>
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control type="text" placeholder="First Name" onChange = {this.firstnameChangeHandler} style ={{width:300, height:25 }}/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Control type="text" placeholder="Last Name" onChange ={this.lastnameChangeHandler} style ={{width:300, height:25, marginTop:3}}/>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group controlId="formGridAddress1">
                                    <Form.Control type="email" placeholder="Email" onChange = {this.usernameChangeHandler} style ={{width:300, height:25, marginTop:3}}/>
                                </Form.Group>

                                <Form.Group controlId="formGridAddress2">
                                    <Form.Control type="password" placeholder="Password" onChange ={this.passwordChangeHandler} style ={{width:300, height:25, marginTop:3}}/>
                                </Form.Group>

                                <Form.Group controlId="formGridAddress2">
                                    <Form.Control type="number" placeholder="ZIP Code" onChange ={this.locationChangeHandler} style ={{width:300, height:25, marginTop:3}}/>
                                </Form.Group>
                                
                                <br></br>
                                <label style={{fontWeight:"bold"}}>Birthday</label>
                                <span style={{fontSize:12}}> Optional</span>
                                <br></br>
                                <TextField
                                    style={{width:300}}
                                    type="date"
                                    defaultValue="2017-05-24"
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                                <br></br>
                                <p style={{fontSize:12}}>You also understand that Yelp may send marketing<br></br>emails about Yelp's products, services, and local<br></br>events. You can unsubscribe at any time.</p>
                                <Button onClick={this.submitSignUp} style={{backgroundColor:"#d32323",width:310, height:34, marginTop:3, color:"white", fontWeight:"bold"}}>Sign Up</Button> 
                                <br></br>
                                <label style={{fontSize:12}}>Already on Yelp?</label>
                                <span style={{fontSize:12}} onClick = {this.submitLogin}> Login</span>
                            </Form>
                        </div>

                    </div>
                    
                    <div class = "column" style ={{textAlign: "center"}}>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <img src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" alt=""/>
                    </div>
                </div>
            </div>

        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        signUp: user => dispatch(signUp(user))
    };
}

function mapStateToProps(store){
    return{
        message: store.info
    };
}

const CustSignUp = connect(mapStateToProps, mapDispatchToProps)(SignUp);
export default CustSignUp;
