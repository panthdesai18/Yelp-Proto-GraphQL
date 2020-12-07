import React, { Component } from 'react'
import HeaderBar from '../HeaderBar/HeaderBar'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {connURL} from '../../Configure'

class UpdatePhoto extends Component {
    
    photoChange = (event) => {
        console.log(event.target.files[0].name);
        const formData = new FormData();
        formData.append('profImage', event.target.files[0], event.target.files[0].name);
        formData.append('userid', sessionStorage.getItem('UserID'));
        console.log(sessionStorage.getItem('UserID'))

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        axios.post(`${connURL}/updateProfPhoto`,formData, config)
                .then(response => {
                    console.log("Image Updated!")  
                    window.location.replace('/custProfile')  
                })
                .catch(error => {
                    console.log("Error!")
                })
    }
    
    render() {
        return (
            <div>
                <div>
                 <HeaderBar/>
                </div>
                <div>
                    <div style={{marginLeft:205, width:936}}>
                    <span> Panth D. </span> &nbsp;&nbsp; <span><FontAwesomeIcon icon={faAngleRight}/></span> &nbsp;&nbsp; <span>Profile Photo</span>
                    <h3 style ={{color: "#D32323"}}>Add photo</h3>
                    
                    <div style={{borderStyle: "dashed",borderRadius:10}}>
                        <h2 style={{marginLeft:300,marginTop:60}}>Drag and Drop your photos here</h2>
                        <div><legend style = {{marginLeft:480}}>OR</legend><br></br></div>
                        <input type='file' onChange={this.photoChange} style={{color:"white", backgroundColor:"#D32323", width:125, height:36,marginLeft:430,marginBottom:60}}></input>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdatePhoto;
