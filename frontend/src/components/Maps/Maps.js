import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux'
import { getCoords } from '../../js/actions';

const mapStyles = {
    width: '26%',
    height: '100%'
};


class Maps extends Component {

    constructor(){
        super();
        this.state = {  
            coords: [],
        }
    }

    componentDidMount(){
        this.props.getCoords()
    }

    render() {
        let temp = null; 
        if( this.props.coords !== undefined){
            temp = Object.keys(this.props.coords).map(i=>
                <Marker
                    title={this.props.coords[i].restname}
                    name={'SOMA'}
                    position={{lat: this.props.coords[i].lat, lng: this.props.coords[i].lng}}
                    icon={<FontAwesomeIcon icon={faMapPin}/>}
                />
                )
        }
        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={10}
                    style={mapStyles}
                    initialCenter={
                    {
                        lat: 37.334450,
                        lng: -121.907950
                    }
                    }
                >
                {temp}
                </Map>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        getCoords: user => dispatch(getCoords(user))
    }
}

function mapStateToProps(store){
    console.log(store)
    return{
        message: store.info,
        coords: store.coords
    }
}

const GetMaps = connect(mapStateToProps, mapDispatchToProps)(Maps);
export default GoogleApiWrapper({
    apiKey: 'AIzaSyB5f3E2sHlB_ppiVsOTX1oVaSsI9WJktss'
}) (GetMaps);