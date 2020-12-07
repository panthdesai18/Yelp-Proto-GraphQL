import React, { Component } from 'react'
import HeaderBar from '../HeaderBar/HeaderBar'
import { Image } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { connect } from 'react-redux'
import { sendMessageRest } from '../../js/actions'

class MessagesCust extends Component {

    constructor(props){
        super(props);
        this.state = {  
            message: "",
            messages: []
        }
    }

    messageChangeHandler = (e) => {
        console.log(this.state.message)
        this.setState({
            message : e.target.value
        }) 
    }

    sendMessage = (e) => {
        var data = {
            userid: this.props.match.params.userid,
            restid: window.sessionStorage.getItem("UserID"),
            message :this.state.message,
            message_side : "customer"
        }
        console.log(data)
        this.props.sendMessageRest(data)
    }

    componentDidMount(){
        console.log("In Messaging!" +this.props.match.params.userid)
        var data = {
            userid: this.props.match.params.userid,
            restid: window.sessionStorage.getItem("UserID"),
        }
        console.log(data)   
        axios.post('http://localhost:3001/getMessage',data)
                .then(response => {
                    console.log("Status Code : ",response.status);
                        if(response.status === 200){
                            this.setState({
                                messages: response.data
                            })
                        }
                })
    }

    render() {
        return (
            <div>
                <HeaderBar/>
                <div class = "row">
                    <div>
                        <div class = "column-left-update">
                            <div style={{marginTop:20,marginLeft:20,fontWeight: "bold" }}>
                                <h2>Messages Customers</h2>
                            </div>
                        </div>
                    </div>
                    <div class = "column-right-update">
                        <div style={{height:80, borderBottomStyle:"solid",borderWidth:0.5,borderColor:"#cfcfcf"}}>
                            <div class = "row">
                                <div class = "column-left-update-message">
                                    <Image src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/7e4e0dfd903f/assets/img/default_avatars/user_large_square.png" size='mini' />
                                </div>
                                <div class = "column-right-update-message">
                                    <h3>The Cheescake Factory.</h3>
                                    San Jose, CA
                                </div>
                            </div>
                        </div>
                        <div style={{textAlign:"center",color:"#666666"}}>
                        </div>
                        <div>
                        {   
                            this.state.messages.map(i => {
                                if(i.side === 'restaurant' ){
                                    return (
                                              <div style={{textAlign:'left',width:'max-content',color:'white',padding:'.3rem'}}><div style={{backgroundColor:'#d32323',padding:'.5rem',margin:'.2rem 0',borderRadius:'10%'}}>{i.message}</div></div>
                                          )  
                                    }
                                    else{
                                        return (
                                              <div style={{display:'flex',justifyContent:'flex-end',flexDirection:'row',padding:'.3rem'}}><div style={{backgroundColor:'#f5f5f5',padding:'.5rem',color:'black',margin:'.2rem 0',borderRadius:'10%'}}>{i.message}</div></div>
                                          ) 
                                    }  
                                })
                        }
                        </div>
                        <div style={{position:"absolute", bottom:5,right:10}}>
                            <Input onChange={this.messageChangeHandler} icon="" placeholder='Your Message' style={{width:1000 ,marginLeft:40}}/>
                            <button onClick={this.sendMessage} style={{borderStyle:"none", color:"#d32323", marginLeft:-10}}><FontAwesomeIcon size = "lg" icon={faPaperPlane}/></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        sendMessageRest: user => dispatch(sendMessageRest(user))
    };
}

function mapStateToProps(store){
    console.log(store);
    return{
        message: store.info,
    };
}

const SendMessageCust = connect(mapStateToProps, mapDispatchToProps)(MessagesCust);
export default SendMessageCust;