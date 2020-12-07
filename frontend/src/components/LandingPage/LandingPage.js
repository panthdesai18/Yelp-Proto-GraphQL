import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faComment, faMotorcycle, faUtensils} from '@fortawesome/free-solid-svg-icons';
import { Image } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';


class LandingPage extends Component {

    submitRestaurants = () => {
        this.props.history.push(`/restaurants`);
    };

    render() {
        return (
            <div>
                <div style={{backgroundImage:"url(https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/af415bdd2cda/assets/img/home/hero_photos/uq7E1Tf9g8IxXLSO9cMDOw.jpg)",height:800,backgroundSize:"cover"}}>
                    <div style={{paddingTop:30}}>
                        <div>
                            <span style={{color:"white", fontWeight:"bold", marginLeft:230,fontSize:14}}>Write A Review</span>
                            <span style={{color:"white", fontWeight:"bold",marginLeft:20,fontSize:14}}>Events</span>
                            <span style={{color:"white", fontWeight:"bold",marginLeft:20,fontSize:14}}>Talks</span>
                            <span style={{color:"white", marginLeft:600}}><FontAwesomeIcon icon={faComment}/></span>
                            <span style={{color:"white",marginLeft:15}}><FontAwesomeIcon icon={faBell}/></span>
                            <span style={{marginLeft:15}} onClick = {this.handleLogout}><Image src='https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/7e4e0dfd903f/assets/img/default_avatars/user_large_square.png' avatar /></span>
                        </div>
                        <div style={{marginLeft:625, marginTop:120}}>
                            <img style={{height:80,width:160}} src="https://s3-media0.fl.yelpcdn.com/assets/public/default@2x.yji-3e0b6fdd67576efda4390daddc35c8f1.png" alt=""/>
                        </div>
                        <div style={{marginTop:60,marginLeft:230}}>
                            <span><Input icon="" placeholder='Find' style={{width:480}}/></span>
                            <span><Input icon="search" placeholder='Location' style={{width:460,marginLeft:-20}}/></span>
                        </div>
                        <div style={{marginTop:20, marginLeft:570}}>
                            <span style={{color:"white"}}><FontAwesomeIcon icon={faUtensils}/></span>
                            <span style={{color:"white", fontWeight:"bold",marginLeft:20,fontSize:14}} onClick={this.submitRestaurants}>Restaurants</span>
                            <span style={{color:"white", marginLeft: 55}}><FontAwesomeIcon icon={faMotorcycle}/></span>
                            <span style={{color:"white", fontWeight:"bold",marginLeft:20,fontSize:14}}>Delivery</span>

                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default LandingPage
