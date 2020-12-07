import React, { Component } from 'react'
import HeaderBar from '../HeaderBar/HeaderBar'
import Checkbox from '@material-ui/core/Checkbox';
import {connect} from 'react-redux';  
import { custOrderDetails, custOrders, filterCustCancelled, filterCustDeliv, filterCustOutforDelivery, filterCustPreparing, filterCustReceived } from '../../js/actions';
import { Link } from 'react-router-dom'

class CustOrders extends Component {

    constructor(){
        super();
        this.state = { 
            custorder: [],
            custorderdetails: []
        }
    }

    componentDidMount(){
        var data = {
            userid :  window.sessionStorage.getItem("UserID")
        }
        this.props.custOrders(data);
        this.props.custOrderDetails(data);
    }
    submitDelivered = () =>{
        const data = {
            userid :  window.sessionStorage.getItem("UserID")
        }
        this.props.filterCustDeliv(data)
    }

    submitReceived = () =>{
        const data = {
            userid :  window.sessionStorage.getItem("UserID")
        }
        this.props.filterCustReceived(data)
    }

    submitPreparing = () =>{
        const data = {
            userid :  window.sessionStorage.getItem("UserID")
        }
        this.props.filterCustPreparing(data)
    }

    submitOutDelivery = () =>{
        const data = {
            userid :  window.sessionStorage.getItem("UserID")
        }
        this.props.filterCustOutforDelivery(data)
    }

    submitCancelled = () =>{
        const data = {
            userid :  window.sessionStorage.getItem("UserID")
        }
        this.props.filterCustCancelled(data)
    }

    render() {
        let temp=null;

        if((this.props.orderdetails !== undefined) && (this.props.orders !== undefined)){
            console.log("PROPS DETAILS", this.props.orderdetails)
            temp=this.props.orderdetails.map(i => {
                console.log("CUST ORDER",i.orderid, i.status)
                return (<div style ={{borderStyle:"solid", borderWidth:1 , width: 300, marginTop: 20, padding:10, borderRadius: 5, borderColor: "#cfcfcf"}}>
                            <p style={{fontWeight:"bold"}}>Order # {i._id}</p>
                            <p style={{fontWeight:"bold", color: "#d32323"}}>Restaurant : The Cheesecake Factory</p>
                            <p style={{fontWeight:"bold"}}>Status : {i.status}</p>
                            {                            
                                // eslint-disable-next-line array-callback-return
                                this.props.orders.map(j => {
                                    // if(j.orderid === i.orderid.toString()){
                                        return(
                                            <h4 style={{color: "#d32323"}}>{j.dishName}</h4>
                                        )
                                    })
                                
                            }
                            <Link target = "_blank"  style={{fontWeight: "bold", fontSize: 17, color:"#d32323", marginLeft: 70}} className='button' to={`/custmessage/${i.userid}`}>Ping Restaurant</Link>                        

                        </div>)
            })
        }

        return (
            <div>
                <HeaderBar/>
                <div class = "row">
                    <div class = "column-left-update">
                        <div style={{marginLeft: 200, marginTop: 20}}>
                            <h3>Filter Your Orders</h3>
                                <Checkbox
                                    onClick={this.submitDelivered}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                /> Delivered
                                <br></br>
                                <Checkbox
                                    onClick={this.submitReceived}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                /> Just Received
                                <br></br>
                                <Checkbox
                                    onClick={this.submitPreparing}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                /> Preparing
                                <br></br>
                                <Checkbox
                                    onClick={this.submitOutDelivery}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                /> Out for Delivery
                                <br></br>
                                <Checkbox
                                    onClick={this.submitCancelled}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                /> Cancelled
                                <br></br>
                        </div>
                    </div>
                    <div class = "column-right-update">
                        {temp}
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        custOrders: user => dispatch(custOrders(user)),
        custOrderDetails: user => dispatch(custOrderDetails(user)),
        filterCustDeliv: user => dispatch(filterCustDeliv(user)),
        filterCustReceived: user => dispatch(filterCustReceived(user)),
        filterCustPreparing: user => dispatch(filterCustPreparing(user)),
        filterCustOutforDelivery: user => dispatch(filterCustOutforDelivery(user)),
        filterCustCancelled: user => dispatch(filterCustCancelled(user))
    };
}

function mapStateToProps(store){
    console.log(store);
    return{
        message: store.info,
        message2: store.info_orddets,
        orders: store.orders,
        orderdetails: store.orderdetails,
        message3: store.info3
    };
}

const CustomerOrders = connect(mapStateToProps, mapDispatchToProps)(CustOrders);
export default CustomerOrders;