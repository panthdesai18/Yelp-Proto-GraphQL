import React, { Component } from 'react'
import HeaderBar from '../HeaderBar/HeaderBar'
import ViewRest from '../Views/ViewRest'
import Maps from '../Maps/Maps'
import { connect } from 'react-redux'
import { filterDelivery, filterDinein, filterPickup } from '../../js/actions'

class LandingRest extends Component {
    constructor(props){
        super(props);
        this.state = {
            restraurants : [],
            temp : React.createRef()
        }
        
    }
    componentDidMount(){
    }

    submitGetDelivery = (e) => {
        this.props.filterDelivery()
    }

    submitGetPickup = (e) => {
        this.props.filterPickup()
    }

    submitGetDineIn = (e) => {
        this.props.filterDinein()
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <div>
                    <HeaderBar></HeaderBar>
                </div>
                <div>
                    <div class="cust-column-left-3" style={{marginLeft: 0}}>
                        <div style={{marginLeft: 125, marginTop:20, color: "#d32323"}}>
                        <h3> Filter Restaurant</h3>
                        <input style={{marginTop:10}} onClick={this.submitGetDelivery} type="checkbox"/>
                        <label style={{fontWeight: "bold", fontSize:16}}>Yelp Delivery</label><br></br>
                        <input style={{marginTop:20}} onClick={this.submitGetPickup} type="checkbox"/>
                        <label style={{fontWeight: "bold", fontSize:16}}>Curbside Pick-Up</label><br></br>
                        <input style={{marginTop:20}} onClick={this.submitGetDineIn} type="checkbox"/>
                        <label style={{fontWeight: "bold", fontSize:16}}>Dine-In</label><br></br>
                        </div>
                    </div>
                    <div class="cust-column-middle-3">
                        <div style={{marginLeft:30}}>
                            <ViewRest restraurants = {this.props.restraurants}/>
                        </div>
                    </div>
                    <div class="cust-column-right-3"style={{}}>
                        <Maps/>
                    </div>
                </div>
                
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        filterDelivery: user => dispatch(filterDelivery(user)),
        filterPickup: user => dispatch(filterPickup(user)),
        filterDinein: user => dispatch(filterDinein(user))
    };
}

function mapStateToProps(store){
    console.log(store);
    return{
        message: store.info1,
        restraurants: store.restraurants,
        message2: store.info2,
        message3: store.info3
    };
}

const RestaurantsLanding = connect(mapStateToProps, mapDispatchToProps)(LandingRest);
export default RestaurantsLanding;