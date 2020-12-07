import React, { Component } from 'react'
import { Button } from 'reactstrap';
import axios from 'axios'
import EventRegister from './EventRegister';
import HeaderBar from '../HeaderBar/HeaderBar'
import { Input } from 'semantic-ui-react';
import { connURL } from '../../Configure';
import {connect} from 'react-redux'
import { restEvents } from '../../js/actions';
import Checkbox from '@material-ui/core/Checkbox';
import { getEventsAscending } from '../../js/actions'
import { getEventsDescending } from '../../js/actions'

class ViewRestEvents extends Component {

    constructor(){
        super();
        this.state = {  
            events: [],
            noevents: true,
            allEvents: [],
            searchEvent: "",
            displaypage: [],
            currentpage: [],
        }    
    }

    componentWillReceiveProps(){
        setTimeout(() => {
            this.setState({
                events : this.props.events,
                allEvents: this.props.events,
                noevents : false
            })
            var pages = Math.ceil(this.props.events.length / 2)
                            this.setState({displaypage:[]})
                            for(var j=1;j<=pages;j++){
                                var joined = this.state.displaypage.concat(j);
                                this.setState({
                                    displaypage: joined
                                })
                            }
            this.setState({
                currentpage: this.props.events.slice(0,2)
            })
        }, 1)
        
    }
    componentDidMount(){
        const data = {
            userid:window.sessionStorage.getItem("UserID")
        }
        this.props.restEvents(data);
    }

    submitRegisteredEvents(){
        window.location.replace('/registeredEvents')
    }

    searchEventHandler = (e) => {
        this.setState({
            searchEvent :e.target.value
        })
    }

    submitEventsAscending = () =>{
        const data = {
            userid :  window.sessionStorage.getItem("UserID")
        }
        this.props.getEventsAscending(data)
    }

    submitEventsDescending = () =>{
        const data = {
            userid :  window.sessionStorage.getItem("UserID")
        }
        this.props.getEventsDescending(data)
    }

    submitEventSearch = () => {
        const data ={
            searchEvent: this.state.searchEvent
        }
        axios.post(`${connURL}/searchEvent`,data)
                    .then(response => {
                        console.log("Status Code : ",response.status);
                        if(response.status === 200){
                            console.log(response.data)
                            this.setState({
                                events: response.data
                            })
                            console.log(this.state.events)
                        }else{
                        }
                    })
                    .catch(err => {
                        // document.getElementById("invalidLog").style.display='block';
                    })
    }

    selectPage = (e) => {
        var startIndex;
        var endIndex;
        startIndex = (e.target.value - 1)*2;
        endIndex = e.target.value*2;
        this.setState({
            currentpage: this.state.allEvents.slice(startIndex, endIndex)
        })
    }

    render() {
        console.log(this.state)

        if( this.state.noevents === true){
            return(<div>
                <p></p>
            </div>
            )
        }
        
        else {
            return(
                <div>
                    <HeaderBar/>
                    <div class="row">
                        <div class="column-left-update">
                            <div style={{marginLeft:60}}>
                                <h3 style={{color : "#d32323", marginLeft:45}}> Search Events</h3>
                                <Input onChange={this.searchEventHandler} icon="" placeholder='Event Name' style={{width:200}}/>
                                <span><button onClick={this.submitEventSearch} style ={{marginLeft:-18}} class="ui icon button"><i class="search icon"></i></button></span>
                                <br></br>
                                <Button style={{marginTop:60, backgroundColor:"#d32323", color: "white", borderRadius:3, borderWidth:0.2, height:30, width:230, fontWeight: "bold"}} onClick={this.submitRegisteredEvents}>Registered Events</Button>
                            </div>
                            <div style={{marginLeft:60, marginTop:40}}>
                                <Checkbox name="checkedB" onClick={this.submitEventsAscending} color="primary"/> Get Events By Ascending
                                <br></br>
                                <Checkbox name="checkedB" onClick={this.submitEventsDescending} color="primary"/> Get Events By Descending
                            </div>
                        </div>
                        <div class="column-right-update">
                            <div>
                                    {this.state.displaypage.map(i => {
                                    return(
                                        <button style={{marginLeft: 30,borderRadius:100, borderWidth:0.5, backgroundColor:"#d32323", color:"white", fontWeight:"bold", marginBottom: 10}} onClick={this.selectPage} value={i}>{i}</button>
                                    )
                                })}
                            </div>
                            {this.state.currentpage.map(i => {
                                console.log("event is ", i)
                                return(
                                    <EventRegister event = {i} />
                                )
                            })}
                        </div>
                    </div>
                    
                    <br></br>
                    
                </div>
            )
        }
    }
}

function mapDispatchToProps(dispatch){
    return{
        restEvents: user => dispatch(restEvents(user)),
        getEventsDescending: user => dispatch(getEventsDescending(user)),
        getEventsAscending: user => dispatch(getEventsAscending(user))
    };
}

function mapStateToProps(store){
    console.log(store);
    return{
        message: store.info,
        message2: store.info1,
        message3: store.info2,
        events: store.events
    };
}

const RestaurantEvents = connect(mapStateToProps, mapDispatchToProps)(ViewRestEvents);
export default RestaurantEvents;
