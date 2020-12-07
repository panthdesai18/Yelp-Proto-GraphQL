import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HeaderBar from '../HeaderBar/HeaderBar'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { connURL } from '../../Configure';
import {connect} from 'react-redux';
import { searchDishName, searchRestName } from '../../js/actions';

class ViewSearchRest extends Component {

    constructor(props){
        super(props)
        this.state ={
            locRest : [],
            dishRest : []

        }
    }

    componentDidMount(){
        console.log(this.props.match.params.searchLoc)
        const data = {
                searchLocation: this.props.match.params.searchLoc,
                userid:window.sessionStorage.getItem("UserID")
            }
            this.props.searchRestName(data);
            this.props.searchDishName(data);
    }

    render() {

        let temp1 = null;
        if((this.props.locRest !== undefined) && (this.props.locRest !== "")){
            temp1 = this.props.locRest.map( i => {
                return(
                    <div>
                        <Card style={{width:375,borderStyle:"solid",borderWidth:1, padding: 5, borderColor:"#cfcfcf", borderRadius: 5}}>
                            <CardImg top width="363" src={`http://localhost:3001/profimages/` + i.restphoto} alt="Dish Image" />
                            <CardBody>
                                <CardTitle style={{color:"#D32323", fontWeight:"bold",fontSize:18}}>{i.restname}</CardTitle>
                                <CardSubtitle style={{fontSize:16,marginTop:10}}>{i.email}</CardSubtitle>
                                <CardText style={{marginTop:10}}>{i.description}</CardText>
                                <CardText style={{color:"#D32323", fontWeight:"bold",fontSize:16}}>{i.zipcode}</CardText>
                                <Link className='button' to={`/viewUniRest/${i._id}`}>Visit</Link>
                            </CardBody>
                        </Card>
                        <br></br>
                    </div>
                )
            })
        }

        let temp2 = null;
        if((this.props.dishRest !== undefined) && (this.props.dishRest !== "")){
            temp2 = this.props.dishRest.map( i => {
                return(
                    <div>
                        <Card style={{width:375,borderStyle:"solid",borderWidth:1, padding: 5, borderColor:"#cfcfcf", borderRadius: 5}}>
                            <CardImg top width="363" src={`http://localhost:3001/profimages/` + i.restphoto} alt="Dish Image" />
                            <CardBody>
                                <CardTitle style={{color:"#D32323", fontWeight:"bold",fontSize:18}}>{i.restname}</CardTitle>
                                <CardSubtitle style={{fontSize:16,marginTop:10}}>{i.email}</CardSubtitle>
                                <CardText style={{marginTop:10}}>{i.description}</CardText>
                                <CardText style={{color:"#D32323", fontWeight:"bold",fontSize:16}}>{i.zipcode}</CardText>
                                <Link className='button' to={`/viewUniRest/${i._id}`}>Visit</Link>
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
                        <div style={{marginLeft:100, color: "#d32323",marginTop: 40}}>
                            <h2>Searched <br></br>Restaurant <br></br>Result!</h2>
                        </div>
                    </div>
                    <div class = "column-right-update">
                        {temp1}
                        {temp2}
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        searchRestName: user => dispatch(searchRestName(user)),
        searchDishName: user => dispatch(searchDishName(user))
    };
}

function mapStateToProps(store){
    console.log(store);
    return{
        message: store.info1,
        locRest: store.locRest,
        message2: store.info2,
        dishRest: store.dishRest
    };
}

const ViewSearch = connect(mapStateToProps, mapDispatchToProps)(ViewSearchRest);
export default ViewSearch;