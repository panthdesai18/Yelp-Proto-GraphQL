import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GoogleButton from 'react-google-button';
import {connect} from 'react-redux';
import {login} from '../../js/actions/index'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : "",
            password : ""
        }
        //Bind the handlers to this class
        this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
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

    submitLogin = (e) => {
        e.preventDefault();
        const data = {
            username : this.state.username,
            password : this.state.password,
        }
        this.props.login(data);
    }

    submitsignup = () => {
        this.props.history.push(`/signUp`);
    };

    render() {
        return (
            <div>
                <div class="header">
                <img src="https://s3-media0.fl.yelpcdn.com/assets/public/default.yji-e02121e4b885bf89645bdc9ea402a681.png" alt=""></img>
                </div>
                <div class = "row">
                    <br></br>
                    <br></br>
                    <br></br>
                    <div class = "column" style ={{ textAlign : "center", width : "600", height: "auto"}}>   
                        <h2 style ={{color:"#d32323"}}> Sign in to Yelp</h2>
                        <div>
                            <label style={{fontWeight:"bold"}}>New to Yelp?<span><p style ={{color:"#2e73b5", fontWeight:"bold"}}> Sign up</p></span></label>
                        </div>    
                        <div>
                            <div>
                                <h6 style = {{marginTop:0}}> By continuing, you agree to Yelp's Terms of Service and</h6>
                                <br></br>
                                <h6 style = {{marginTop:-40}}>Yelp's Privacy Policy. </h6>
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
                            <br></br>
                        </div>
                        
                        <div><legend style = {{marginLeft:340}}>OR</legend><br></br></div>
                        <div>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email" onChange = {this.usernameChangeHandler} style ={{width:300, height:25 }}/>
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" onChange ={this.passwordChangeHandler} style ={{width:300, height:25, marginTop:3 }}/>
                            </Form.Group>
                            <Form.Text className="text-muted">
                                Forgot Password?
                            </Form.Text>
                            <br></br>
                            <Button onClick={this.submitLogin} style={{backgroundColor:"#d32323",width:310, height:34, marginTop:3, color:"white", fontWeight:"bold"}}>Sign In</Button> 
                            <br></br>
                            <Form.Text className="text-muted" onClick={this.submitsignup}>
                                New to Yelp? Sign Up.
                            </Form.Text>
                        </Form>
                        </div>
                        </div>
                    <div class = "column" style ={{ textAlign : "center", width : "600", height: "auto"}}>
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
        login: user => dispatch(login(user))
    };
}

function mapStateToProps(store){
    return{
        message: store.info,
        userid: store.userid
    };
}

const CustLogin = connect(mapStateToProps, mapDispatchToProps)(Login);
export default CustLogin;

