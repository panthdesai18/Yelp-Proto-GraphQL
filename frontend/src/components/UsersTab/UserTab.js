import React, { Component } from 'react'
import HeaderBar from '../HeaderBar/HeaderBar'
import { Input } from 'semantic-ui-react';
import { Button } from 'reactstrap';
import { getAllUsers } from '../../js/actions'
import { custProfile } from '../../js/actions'
import { connect } from 'react-redux'
import {
    Card, CardText, CardBody, CardTitle
} from 'reactstrap';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { connURL } from '../../Configure';
import { searchUser } from '../../js/actions'

class UserTab extends Component {

    constructor(){
        super();
        this.state = {
            searchUser: "",
            displaypage: [],
            currentpage: [],
            allUsers: []
        }    
    }

    componentWillReceiveProps(){
        
        setTimeout(() => {
            console.log("PROPS are ", this.props.users)
            this.setState({
                rest : this.props.restraurants,
                allUsers : this.props.users
            })
            var pages = Math.ceil(this.props.users.length / 2)
                            this.setState({displaypage:[]})
                            for(var j=1;j<=pages;j++){
                                var joined = this.state.displaypage.concat(j);
                                this.setState({
                                    displaypage: joined
                                })
                            }
            this.setState({
                currentpage: this.props.users.slice(0,2)
            })
        }, 0)   
    }

    selectPage = (e) => {
        var startIndex;
        var endIndex;
        startIndex = (e.target.value - 1)*2;
        endIndex = e.target.value*2;
        this.setState({
            currentpage: this.state.allUsers.slice(startIndex, endIndex)
        })
    }

    componentDidMount(){
        const data = {
            userid:window.sessionStorage.getItem("UserID")
        }
        this.props.getAllUsers(data);
    }

    searchUserHandler = (e) => {
        this.setState({
            searchUser :e.target.value
        })
    }

    submitUserSearch = () => {
        const data ={
            searchUser: this.state.searchUser
        }
        this.props.searchUser(data);
    }

    submitFollow = (followingid) => {
        const data = {
            followingid: followingid,
            userid: window.sessionStorage.getItem("UserID")
        }
        console.log(data)
        axios.defaults.withCredentials = true;
        axios.post(`${connURL}/followUser`,data)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 200){
                    console.log("User Followed!")
                }else{
                }
            })
            .catch(err => {
            })
    }

    submitFollowingUsers(){
        window.location.replace('/followingUsers')
    }

    render() {

        let temp = null;
        if(this.props.users !== undefined){
            temp = this.state.currentpage.map( i => {
                return(
                    <Card style={{width:250,borderStyle:"solid",borderWidth:1,padding: 15, borderRadius: 4, borderColor: "#CFCFCF", marginTop:10, fontWeight: "bold"}}>
                        <CardBody>
                            <CardTitle style={{color:"#D32323", fontWeight:"bold",fontSize:18}}>{i.firstname} {i.lastname}</CardTitle>
                            <CardText style={{marginTop:10}}>Nickname: {i.nickname}</CardText>
                            <CardText style={{marginTop:10}}>I live in {i.city}, {i.country}</CardText>
                            <CardText style={{marginTop:10}}>I love: {i.ilove}</CardText>
                            <Link style={{fontWeight: "bold", fontSize: 16, color:"#3b5998"}} className='button' to={`/userProfile/${i._id}`}>Visit Profile</Link>
                            <span style={{marginLeft:50, fontWeight: "bold", fontSize: 16, color:"#3b5998"}} onClick={() => this.submitFollow(i._id)}>Follow <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon></span>
                        </CardBody>
                    </Card>
                )
            })
        }

        return (
            <div>
                <HeaderBar/>
                <div>
                    <div className="column-left-update">
                        <h3 style={{color : "#d32323", marginLeft:45}}> Search Users </h3>
                        <Input onChange={this.searchUserHandler} icon="" placeholder='User Name' style={{width:200, marginTop:10}}/>
                        <span><button onClick={this.submitUserSearch} style ={{marginLeft:-18}} class="ui icon button"><i class="search icon"></i></button></span>
                        <br></br>
                        <Button style={{marginTop:60, backgroundColor:"#d32323", color: "white", borderRadius:3, borderWidth:0.2, height:30, width:230, fontWeight: "bold"}} onClick={this.submitFollowingUsers}>Following Users</Button>
                    </div>
                    <div className="column-right-update">
                        <h3 style={{color : "#d32323", marginLeft:45}}> List of All Users: </h3>
                        <div style={{marginLeft:40}}>

                        {this.state.displaypage.map(i => {
                            return(
                                <button style={{marginLeft: 30,borderRadius:100, borderWidth:0.5, backgroundColor:"#d32323", color:"white", fontWeight:"bold"}} onClick={this.selectPage} value={i}>{i}</button>
                            )
                        })}
                        </div>
                        {temp}
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        getAllUsers: user => dispatch(getAllUsers(user)),
        custProfile: user => dispatch(custProfile(user)),
        searchUser: user  => dispatch(searchUser(user))
    };
}

function mapStateToProps(store){
    console.log(store);
    return{
        message: store.info,
        users: store.users,
        firstname: store.firstname,
        lastname: store.lastname,
        imageURL: store.imageURL,
        city: store.city,
        state: store.state,
        country: store.country,
        ilove:store.ilove
    };
}

const GetAllUsers = connect(mapStateToProps, mapDispatchToProps)(UserTab);
export default GetAllUsers;