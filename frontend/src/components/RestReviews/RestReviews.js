import React, { Component } from 'react'
import {Card} from 'antd'
import HeaderBar from '../HeaderBar/HeaderBar'
import {connect} from 'react-redux';  
import { restReviews} from '../../js/actions'

class RestReviews extends Component {

    constructor(){
        super();
        this.state = {  
            reviews: []
        }
    }

    componentDidMount(){
        var data = {
            userid :  window.sessionStorage.getItem("UserID"),
        }
        this.props.restReviews(data);
            
    }

    render() {
        var temp = null;
        console.log("TEMP IS:" ,temp)

        if(this.props.reviews!== undefined){
            console.log(this.props.reviews)
            temp = this.props.reviews.map(review => {
                return( 
                        <div>
                            <Card title="Review!" bordered={true} style={{ width: 300, borderStyle:"solid", borderWidth:1, marginTop:10, borderColor:"#cfcfcf", borderRadius: 5, padding: 10, fontWeight: "bold"}}>
                                <p style={{marginTop:10, color: "#d32323"}}>Rating : {review.reviewno}</p>
                                <p>Review : {review.reviewdesc}</p>
                                <p style = {{color: "#d32323"}}class = "cust-link">User ID : {review.userid}</p>
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
                        <div style={{color:"#d32323", marginLeft: 190, marginTop: 20}}>
                            <h3>Reviews are : </h3>
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
        restReviews: user => dispatch(restReviews(user))
    };
}

function mapStateToProps(store){
    console.log(store);
    return{
        message: store.info,
        reviews: store.reviews
    };
}

const RestaurantReviews = connect(mapStateToProps, mapDispatchToProps)(RestReviews);
export default RestaurantReviews;