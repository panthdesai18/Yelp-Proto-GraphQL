import React, { Component } from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { connURL } from '../../Configure';

class EventRegister extends Component {

    constructor(props){
        super(props);
        console.log("Props in event register",props)
    }

    componentDidMount(){
        console.log("EVENT REGISTER PROPS:",this.props.event)
    }

    submitRegister = (e) => {
        console.log(this.props.event.eventid)
        const data = {
            eventid: this.props.event._id,
            userid: window.sessionStorage.getItem("UserID")
        }
        console.log(data)
        axios.defaults.withCredentials = true;
        axios.post(`${connURL}/register`,data)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 200){
                    console.log("Event registered!")
                }else{
                }
            })
            .catch(err => {
            })
    }

    render() {
        return (
            <div>
               <div>
                    <Card style={{width:250,borderStyle:"solid",borderWidth:1,padding: 15, borderRadius: 4, borderColor: "#CFCFCF"}}>
                        <CardBody>
                        <CardTitle style={{color:"#D32323", fontWeight:"bold",fontSize:18}}>{this.props.event.eventname}</CardTitle>
                        <CardSubtitle style={{fontSize:16,marginTop:10}}>#{this.props.event.eventhash}</CardSubtitle>
                        <CardText style={{marginTop:10}}>{this.props.event.eventdesc}</CardText>
                        <CardText style={{color:"#D32323", fontWeight:"bold",fontSize:16}}>{this.props.event.eventlocation}</CardText>
                        <CardText style={{marginTop:10}}>{this.props.event.eventdate.substring(0,10)}</CardText>
                        <Button style={{backgroundColor:"#d32323", color: "white", borderRadius:3, borderWidth:0.2, height: 30, width: 80, fontWeight: "bold"}}onClick={this.submitRegister}>Register!</Button>
                        </CardBody>
                    </Card>
                <br></br>
            </div>
            </div>
        )
    }
}

export default EventRegister;