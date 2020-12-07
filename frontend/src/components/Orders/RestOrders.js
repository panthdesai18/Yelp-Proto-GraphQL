import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import HeaderBar from '../HeaderBar/HeaderBar'
import Checkbox from '@material-ui/core/Checkbox';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { filterRestCancelled, filterRestNew, filterRestPast, restOrderDetails, restOrders, updateOrder } from '../../js/actions'


class RestOrders extends Component {

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


    constructor(){
        super();
        this.state = { 
            restorder: [],
            restorderdetails: [],
            status: "",
            userdetails: [],
            visible: false
        }
    }

    componentDidMount(){
        var data = {
            userid :  window.sessionStorage.getItem("UserID")
        }
        this.props.restOrders(data);
        this.props.restOrderDetails(data)
    }

    changeStatusHandler = (event, {values}) =>{
        var a = document.getElementById("dropdown")
        console.log(a)
        console.log("DATA IS", event.target.textContent)
        this.setState({
            status: event.target.textContent
        })
        
    }

    submitChangeStatus = (orderid) => {
        // console.log(orderid)
        const data = {
            userid :  window.sessionStorage.getItem("UserID"),
            orderid : orderid,
            status : this.state.status
        }
        console.log(data)
        this.props.updateOrder(data)
    }

    submitDelivered = () =>{
        const data = {
            userid :  window.sessionStorage.getItem("UserID")
        }
        this.props.filterRestPast(data)
    }

    submitReceived = () =>{
        const data = {
            userid :  window.sessionStorage.getItem("UserID")
        }
        this.props.filterRestNew(data)
    }

    submitCancelled = () =>{
        const data = {
            userid :  window.sessionStorage.getItem("UserID")
        }
        this.props.filterRestCancelled(data)
    }

    render() {

        let temp=null;
        const options = [
            { key: 1, text: 'Order Received', value: 1 },
            { key: 2, text: 'Preparing', value: 2 },
            { key: 3, text: 'Out for Delivery', value: 3 },
            { key: 4, text: 'Delivered', value: 4},
            { key: 5, text: 'Cancelled', value: 5}
        ]

        if((this.props.orderdetails !== undefined) && (this.props.orders !== undefined)){
            temp=this.props.orderdetails.map(i => {
                return (<div style ={{borderStyle:"solid", borderWidth:1 , width: 300, marginTop: 20, padding:10, borderRadius: 5, borderColor: "#cfcfcf"}}>
                            <p style={{fontWeight:"bold"}}>Order #{i._id}</p>
                            <p style={{fontWeight:"bold", color:"#d32322"}} class="cust-link">User : Darth Vader</p>
                            {                            
                                // eslint-disable-next-line array-callback-return
                                this.props.orders[0].map(j => {
                                    if(j.orderid === i._id){
                                        return(
                                            <h4>Caesar Salad</h4>
                                        )
                                    }
                                })
                            }
                            <Dropdown onChange={this.changeStatusHandler} id = 'dropdown' name = {i.orderid} placeholder={i.status} options={options} fluid selection />
                            <Button style={{marginTop:10, backgroundColor:"#d32323", color:"white", width:280}}onClick={ () => this.submitChangeStatus(i._id) }>Update Status</Button>
                            <Link target = "_blank"  style={{fontWeight: "bold", fontSize: 17, color:"#d32323", marginLeft: 100, marginTop: 20}} className='button' to={`/message/${i.userid}`}>Ping User</Link>                        
                        </div>)
            })
        }
        return (
            <div>
                <HeaderBar/>
                <div class = "row">
                    <div class="column-left-update">
                        <div style={{marginLeft:200, marginTop: 20}}>
                            <h3 style={{fontWeight:"bold"}}>Filter Your Orders</h3>
                            <Checkbox
                                onClick={this.submitReceived}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            /> New Orders <br></br>
                            <Checkbox
                                onClick={this.submitDelivered}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            /> Past Orders <br></br>
                            <Checkbox
                                onClick={this.submitCancelled}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            /> Cancelled <br></br>
                        </div>
                    </div>
                    <div class="column-right-update">
                        {temp}
                    </div>
                </div>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return{
        restOrders: user => dispatch(restOrders(user)),
        restOrderDetails: user => dispatch(restOrderDetails(user)),
        updateOrder: user => dispatch(updateOrder(user)),
        filterRestNew: user => dispatch(filterRestNew(user)),
        filterRestPast: user => dispatch(filterRestPast(user)),
        filterRestCancelled: user => dispatch(filterRestCancelled(user))
    };
}

function mapStateToProps(store){
    console.log(store);
    return{
        message: store.info,
        orders: store.orders,
        message2: store.info_orderdets,
        orderdetails: store.orderdetails,
        message3 : store.info1
    };
}

const RestaurantOrders = connect(mapStateToProps, mapDispatchToProps)(RestOrders);
export default RestaurantOrders;
