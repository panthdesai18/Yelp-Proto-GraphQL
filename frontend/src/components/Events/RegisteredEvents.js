import React, { Component } from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import HeaderBar from '../HeaderBar/HeaderBar'
import {connect} from 'react-redux'
import { registeredEvents } from '../../js/actions';

class RegisteredEvents extends Component {

    constructor(){
        super();
        this.state = { 
            events: []
        }
    }

    componentDidMount(){
        const data ={
            userid:window.sessionStorage.getItem("UserID")
        }
        console.log(data)
        this.props.registeredEvents(data)
    }

    render() {
        let temp = null
        if(this.props.events !== undefined){
            console.log("PROPS ARE __________", this.props.events[0][0])
            temp = this.props.events.map( i => {
                return(
                    <Card style={{width:250,borderStyle:"solid",borderWidth:1,padding: 15, borderRadius: 4, borderColor: "#CFCFCF", marginTop:10, fontWeight: "bold"}}>
                        <CardBody>
                            <CardTitle style={{color:"#D32323", fontWeight:"bold",fontSize:18}}>{i[0].eventname}</CardTitle>
                            <CardSubtitle style={{fontSize:16,marginTop:10}}>#{i[0].eventhash}</CardSubtitle>
                            <CardText style={{marginTop:10}}>{i[0].eventdesc}</CardText>
                            <CardText style={{color:"#D32323", fontWeight:"bold",fontSize:16}}>{i[0].eventlocation}</CardText>
                            <CardText style={{marginTop:10}}>{i[0].eventdate.substring(0,10)}</CardText>
                        </CardBody>
                    </Card>
                )
            })
        }
        return (
            <div>
                <HeaderBar/>
                <h3>You have Registered to the following Events!</h3>
                {temp}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        registeredEvents: user => dispatch(registeredEvents(user))
    };
}

function mapStateToProps(store){
    console.log(store);
    return{
        message: store.info,
        events: store.events
    };
}

const UserRegEvents = connect(mapStateToProps, mapDispatchToProps)(RegisteredEvents);
export default UserRegEvents;