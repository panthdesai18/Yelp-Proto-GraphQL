import React, { Component } from 'react'
import HeaderBar from '../HeaderBar/HeaderBar'
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { Button } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react'
import {connect} from 'react-redux'
import { cart, placeOrder } from '../../js/actions';

class Cart extends Component {

    constructor(props){
        super(props)
        this.state={
            cart: [],
            restname: "",
            restid: ""
        }
    }

    submitPlaceOrder = (e) => {
        e.preventDefault();
        const data = {
            cart : this.props.cart1,
            userid: window.sessionStorage.getItem("UserID")
        }
        console.log("Submitting Order",data)
        this.props.placeOrder(data)
        // window.location.reload(false);
        
    }

    componentDidMount(){
        this.props.cart()
    }

    render() {
        
        const options = [
            { key: 1, text: 'Pick Up', value: 1 },
            { key: 2, text: 'Delivery', value: 2 }
        ]

        let temp = null;

        if(this.props.cart1 !== undefined){
            console.log("PROPS ARE IN TEMP:", this.props.cart1)
            temp = this.props.cart1.dishes.map(i =>{
                return(
                    <div>
                        <Card style={{width:350,borderStyle:"solid",borderWidth:1, marginTop: 10, borderRadius: 3, padding: 5, borderColor: "#cfcfcf"}}>
                            {/* <CardImg top width="100%" src = "" alt="Dish Image" /> */}
                            <CardBody>
                                <CardTitle style={{color:"#D32323", fontWeight:"bold",fontSize:18}}>{i.restaurant}</CardTitle>
                                <CardSubtitle style={{fontSize:16,marginTop:10, color: "#d32323",fontWeight:"bold"}}>{i.dishname}</CardSubtitle>
                            </CardBody>
                        </Card>
                        <br></br>
                    </div>
                )
            })
        }

        return (
            <div>
                <HeaderBar/>
                <div class = "row">
                    <div class = "column-left-update">
                        <div style = {{marginLeft:190, marginTop:20, color: "#d32323"}}>
                            <h3>Confirm your Order</h3>
                        </div>
                    </div>
                    <div class = "column-right-update">
                        {temp}
                        <Dropdown style={{width:250}} onChange={this.changeStatusHandler} placeholder= "Delivery" id = 'dropdown' options={options} fluid selection />
                        <Button style={{backgroundColor:"#d32323", color: "white", fontWeight: "bold", width: 250, marginTop:20}} onClick={this.submitPlaceOrder}>Place Order!</Button>
                    </div>
                </div>
                </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        cart: user => dispatch(cart(user)),
        placeOrder: user => dispatch(placeOrder(user))
    };
}

function mapStateToProps(store){
    console.log(store);
    return{
        message: store.info,
        cart1: store.cart,
        message2: store.info1
    };
}

const RestaurantEvents = connect(mapStateToProps, mapDispatchToProps)(Cart);
export default RestaurantEvents;
