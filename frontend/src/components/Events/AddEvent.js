import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import HeaderBar from '../HeaderBar/HeaderBar'
import { connect } from 'react-redux'
import { addNewEvent } from '../../js/actions';

class AddEvent extends Component {

    constructor(){
        super();
        this.state = {  
            eventname : "",
            eventdesc: "",
            eventhash: "",
            eventlocation: "",
            eventdate: ""
        }
    }

    componentDidMount(){
        var data = {
             userid :  window.sessionStorage.getItem("UserID")
        }
        console.log(data)
    }

    eventnameChangeHandler = (e) => {
        this.setState({
            eventname : e.target.value
        })
    }
    
    eventhashChangeHandler = (e) => {
        this.setState({
            eventhash : e.target.value
        })
    }

    eventlocationChangeHandler = (e) => {
        this.setState({
            eventlocation : e.target.value
        })
    }

    eventdateChangeHandler = (e) => {
        this.setState({
            eventdate : e.target.value
        })
    }

    eventDescriptionChangeHandler = (e) => {
        this.setState({
            eventdesc :e.target.value
        })
    }

    submitAddEvent = (e) => {
        // var headers = new Headers();
        //prevent page from refresh
        e.preventDefault();
        const data = {
            eventname: this.state.eventname,
            eventhash: this.state.eventhash,
            eventdesc: this.state.eventdesc,
            eventlocation: this.state.eventlocation,
            eventdate: this.state.eventdate,
            userid:window.sessionStorage.getItem("UserID")
        }
        this.props.addNewEvent(data)
    }

    submitGetCreatedEvents = (e) => {
        this.props.history.push("/createdEvents")
    }

    render() {
        return (
            <div>
                <HeaderBar></HeaderBar>
                <div class="row">
                    <div class="column-left-update">
                        <div>
                            <h3 style={{marginLeft:180, color:"#d32323", marginTop:40, borderBottomStyle:"solid", borderBottomWidth:2, borderBottomColor:"#e1e3e1", paddingBottom:5}}>Add a New Event!</h3>
                        </div>
                        <Button onClick = {this.submitGetCreatedEvents} style={{marginLeft:180, borderRadius:5, backgroundColor:"#d32323",width:188, height:40, marginTop:10, color:"white", fontWeight:"bold"}}>View Created Events</Button>

                    </div>
                    <div class="column-right-update">
                        <h4 style={{marginTop:5}}>Event Name</h4>
                        <p style={{fontSize:12,color:"#999999", marginTop:-15}}>This field is required.</p>
                        <input type="text" style={{height:30,width:465,marginTop:-5, borderRadius:5}} onChange = {this.eventnameChangeHandler}></input>
                                    
                        <h4 style={{marginTop:5}}>Event Hashtag</h4>
                        <p style={{fontSize:12,color:"#999999", marginTop:-15}}>Taco Tuesday Aficionado, The Globetrotting Reviewer</p>
                        <input type="text" style={{height:30,width:465, marginTop:-5, borderRadius:5}} onChange = {this.eventhashChangeHandler}></input>
                                    
                        <h4 style={{marginTop:5}}>Event Location</h4>
                        <p style={{fontSize:12,color:"#999999", marginTop:-15}}>Comma separated phrases (e.g. sushi, Radiohead, puppies)</p>
                        <input type="text" style={{height:30,width:465, marginTop:-5, borderRadius:5}} onChange = {this.eventlocationChangeHandler}></input>
                    
                        <h4 style={{marginTop:5}}>Event Date</h4>
                        <p style={{fontSize:12,color:"#999999", marginTop:-15}}>What kind of dish is this. Select any one.</p>
                        <input type="date" style={{height:30,width:465, marginTop:-5, borderRadius:5}} onChange = {this.eventdateChangeHandler}></input>
                                    
                        <h4 style={{marginTop:5}}>Event description</h4>
                        <p style={{fontSize:12,color:"#999999", marginTop:-15}}>Tell us something about your dish</p>
                        <input type="text" style={{height:30,width:465, marginTop:-5, borderRadius:5}} onChange = {this.eventDescriptionChangeHandler}></input>
                        <br></br>
                                    
                        <Button onClick={this.submitAddEvent} style={{backgroundColor:"#d32323",width:465, height:34, marginTop:9, color:"white", fontWeight:"bold", borderRadius:5}}>Post event</Button>
                    
                    </div>
                
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        addNewEvent: user => dispatch(addNewEvent(user))
    };
}

function mapStateToProps(store){
    console.log(store);
    return{
        message: store.info,
    };
}

const AddNewEvent = connect(mapStateToProps, mapDispatchToProps)(AddEvent);
export default AddNewEvent;
