import React, { Component } from 'react'
import HeaderBar from '../HeaderBar/HeaderBar'
import { Rating } from '@material-ui/lab';
import { Button } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ViewDish from '../ViewDish';

class CustRest extends Component {

    componentDidMount(){
    }
    
    render() {
        return (
            <div>
                <div>
                    <HeaderBar/>
                </div>
                <div>
                    <div class="row-rest">
                        <div class="column-rest">
                            <img src="https://s3-media0.fl.yelpcdn.com/bphoto/OYWghGi0PrbxBHf5O1Hsjw/l.jpg" style={{width:"100%",height:240}} alt=""></img>
                        </div>
                        <div class="column-rest">
                            <img src="https://s3-media0.fl.yelpcdn.com/bphoto/-A0ReLV_gR5c6DV1Z4y0hg/l.jpg" style={{width:"100%",height:240}} alt=""></img>

                        </div>
                        <div class="column-rest"> 
                            <img src="https://s3-media0.fl.yelpcdn.com/bphoto/QUQTgVuAFhTdkZFJD8xDAw/l.jpg" style={{width:"100%",height:240}} alt=""></img>

                        </div>
                        <div class="column-rest">
                            <img src="https://s3-media0.fl.yelpcdn.com/bphoto/O9lumTIdZL3D064aMR9GBQ/l.jpg" style={{width:"100%",height:240}} alt=""></img>

                        </div>
                    </div>
                </div>
                <div style={{borderBottomStyle:"solid",borderWidth:1,borderBottomColor:"#c7c7c7"}}>
                    <h1>Restaurant Name!</h1>
                    <Rating name="size-large" defaultValue={2} size="large"/><br></br>
                    <Button style={{backgroundColor:"#F43939", color:"white"}}><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>Write A Review</Button>
                    <ViewDish></ViewDish>
                </div>
            </div>
        )
    }
}

export default CustRest;
