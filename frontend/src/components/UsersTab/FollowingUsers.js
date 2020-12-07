import React, { Component } from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import HeaderBar from '../HeaderBar/HeaderBar'
import { connect } from 'react-redux'
import { getFollowingUsers } from '../../js/actions'

class FollowingUsers extends Component {

    componentDidMount(){
        const data ={
            userid:window.sessionStorage.getItem("UserID")
        }
        console.log(data)
        this.props.getFollowingUsers(data)
    }

    render() {
        let temp = null
        if(this.props.users !== undefined){
            console.log("PROPS ARE __________", this.props.users[0][0])
            temp = this.props.users.map( i => {
                return(
                    <Card style={{width:250,borderStyle:"solid",borderWidth:1,padding: 15, borderRadius: 4, borderColor: "#CFCFCF", marginTop:10, fontWeight: "bold"}}>
                        <CardBody>
                            <CardTitle style={{color:"#D32323", fontWeight:"bold",fontSize:18}}>{i[0].firstname} {i[0].lastname}</CardTitle>
                            <CardSubtitle style={{fontSize:16,marginTop:10}}>Nickname: {i[0].nickname}</CardSubtitle>
                            <CardText style={{marginTop:10}}>I live in : {i[0].city}, {i[0].country}</CardText>
                            <CardText style={{marginTop:10}}>I love {i[0].ilove}</CardText>
                            <CardText style={{color:"#D32323", fontWeight:"bold",fontSize:16}}>{i[0].eventlocation}</CardText>
                            {/* <CardText style={{marginTop:10}}>{i[0].eventdate.substring(0,10)}</CardText> */}
                        </CardBody>
                    </Card>
                )
            })
        }
        return (
            <div>
                <HeaderBar/>
                <h3>The users you are following are:</h3>
                {temp}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        getFollowingUsers: user => dispatch(getFollowingUsers(user))
    };
}

function mapStateToProps(store){
    console.log(store);
    return{
        message: store.info,
        users: store.users
    };
}

const GetFollowingUsers = connect(mapStateToProps, mapDispatchToProps)(FollowingUsers);
export default GetFollowingUsers;
