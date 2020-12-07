import React, { Component } from 'react'
import HeaderBar from '../HeaderBar/HeaderBar'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {Button} from 'semantic-ui-react'
import { connURL } from '../../Configure';

class UpdateRestPhotoTwo extends Component {
    photoChange = (event) => {
        console.log("Here in Updating Rest Photo!")
        console.log(event.target.files[0].name);
        const formData = new FormData();
        formData.append('restphoto', event.target.files[0], event.target.files[0].name);
        formData.append('userid', sessionStorage.getItem('UserID'));
        console.log(sessionStorage.getItem('UserID'))

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        axios.post(`${connURL}/updateRestPhotoTwo`,formData, config)
                .then(response => {
                    console.log("Image Updated!")  
                    window.location.replace('/restProfile')  
                })
                .catch(error => {
                    console.log("Error!")
                })
    }

    submitGetCreatedEvents = (e) => {
        this.props.history.push("/updateRestPhoto3")
    }

    render() {
        return (
            <div>
                <div>
                 <HeaderBar/>
                </div>
                <div>
                    <div style={{marginLeft:205, width:936}}>
                    <span> Restaurant </span> &nbsp;&nbsp; <span><FontAwesomeIcon icon={faAngleRight}/></span> &nbsp;&nbsp; <span>Profile Photo</span>
                    <h3 style ={{color: "#D32323"}}>Add photo</h3>
                    
                    <div style={{borderStyle: "dashed",borderRadius:10}}>
                        <h2 style={{marginLeft:300,marginTop:60}}>Drag and Drop your photos here</h2>
                        <div><legend style = {{marginLeft:480}}>OR</legend><br></br></div>
                        <input type='file' onChange={this.photoChange} style={{color:"white", backgroundColor:"#D32323", width:125, height:36,marginLeft:430,marginBottom:60}}></input>
                    </div>

                    <Button onClick = {this.submitGetCreatedEvents} style={{marginLeft:0, borderRadius:5, backgroundColor:"#d32323",width:188, height:40, marginTop:10, color:"white", fontWeight:"bold"}}>Add 3rd Photo</Button>

                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateRestPhotoTwo