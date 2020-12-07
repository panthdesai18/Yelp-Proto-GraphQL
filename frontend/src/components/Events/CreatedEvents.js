import React, { Component } from 'react'
import {Card} from 'antd'
import { Modal } from 'antd';
import HeaderBar from '../HeaderBar/HeaderBar'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { createdEvents, getRegisteredUsers } from '../../js/actions';

class CreatedEvents extends Component {

    constructor(props){
        super(props)
        this.state = {  
            events: [],
            visible : false,
            user:[],
            allEvents: [],
            searchEvent: "",
            displaypage: [],
            currentpage: []
        }
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };

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
        var data = {
            userid :  window.sessionStorage.getItem("UserID"),
        }
        this.props.createdEvents(data)
    }

    getUserDetails = (eventid) => {
        this.setState({
            visible : true
        })
        console.log(eventid)
        const data = {
            eventid : eventid
        }
        this.props.getRegisteredUsers(data)

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

        let temp = null;
        let temp2 = null; 
        if(this.props.user !== undefined){
             console.log("USERS ARE:", this.props.user)
            temp2 = this.props.user.map( j => {
                return(
                    <Modal
                        title={j[0].firstname}
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        onClick={() => this.showProfile(j.userid)}
                    >
                        <p>{j[0].email}</p>
                        <p>{j[0].address}</p>
                        <p>{j[0].city}</p>
                        <Link style={{fontWeight: "bold", fontSize: 14}} className='button' to={`/userProfile/${j[0]._id}`}>Visit</Link>
                    </Modal>
                )
            })
        }
        if( this.props.events !== undefined){
            temp = this.state.currentpage.map( i => {
                return(
                    <div>
                        <Card title = "Created Event" bordered={true} style={{ width: 300, borderStyle:"solid", borderWidth:1, marginTop:10, borderColor: "#cfcfcf", padding: 10, borderRadius: 5, fontWeight: "bold"}}>
                            <p style={{marginTop: 10}}>Name : {i.eventname}</p>
                            <p>Description : {i.eventdesc}</p>
                            <p>Location : {i.eventlocation}</p>
                            <p>Date : {i.eventdate.substring(0,10)}</p>
                            <p style ={{color:"#d32323"}}class = "cust-link" onClick={ () => {this.getUserDetails(i._id)} }>Show Registered Users</p>
                        </Card>
                    </div>
                )
            })
        }

        return (
            <div>
                <HeaderBar/>
                <div class = "row">
                    <div class = "column-left-update">
                        <div style={{marginLeft:190, marginTop:20, color:"#d32323"}}>
                            <h3> Created Events are:</h3>
                        </div>
                    </div>
                    <div class = "column-right-update">
                    <div>
                        <div>
                        {this.state.displaypage.map(i => {
                                    return(
                                        <button style={{marginLeft: 30,borderRadius:100, borderWidth:0.5, backgroundColor:"#d32323", color:"white", fontWeight:"bold", marginBottom: 10}} onClick={this.selectPage} value={i}>{i}</button>
                                    )
                                })}
                        </div>
                        {temp}
                        {temp2}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        createdEvents: user => dispatch(createdEvents(user)),
        getRegisteredUsers: user => dispatch(getRegisteredUsers(user))
    };
}

function mapStateToProps(store){
    console.log(store);
    return{
        message: store.info,
        events: store.events,
        user: store.users
    };
}

const RestCreatedEvents = connect(mapStateToProps, mapDispatchToProps)(CreatedEvents);
export default RestCreatedEvents;