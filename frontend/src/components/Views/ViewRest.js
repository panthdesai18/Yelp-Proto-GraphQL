import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getRestaurants } from '../../js/actions';

class ViewRest extends Component {

    constructor(props){
        super(props);
        this.state = { 
            rest: [],
            displaypage: [],
            currentpage: [],
            allRest: []
        }
        console.log(props)
    }
    
    componentWillReceiveProps(){
        
        setTimeout(() => {
            console.log("PROPS are ", this.props.restraurants)
            this.setState({
                rest : this.props.restraurants,
                allRest : this.props.restaurants
            })
            var pages = Math.ceil(this.props.restaurants.length / 2)
            this.setState({displaypage:[]})
            for(var j=1;j<=pages;j++){
                var joined = this.state.displaypage.concat(j);
                this.setState({
                    displaypage: joined
                })
            }
            this.setState({
                currentpage: this.props.restaurants.slice(0,2)
            })

        }, 0)
        

    }
    
    componentDidMount(){
        var data = {
            dishid :  window.sessionStorage.getItem("UserID")
        }
        this.props.getRestaurants(data)
    }

    selectPage = (e) => {
        var startIndex;
        var endIndex;
        startIndex = (e.target.value - 1)*2;
        endIndex = e.target.value*2;
        this.setState({
            currentpage: this.state.allRest.slice(startIndex, endIndex)
        })
    }

    render() {
        let temp = null;
        if(this.props.restaurants !== undefined){
            temp = this.state.currentpage.map(i => {
                return(
                    <div style={{marginLeft:70}}>
                        <Card style={{width:375,borderStyle:"solid",borderWidth:1, padding: 5, borderColor:"#cfcfcf", borderRadius: 5}}>
                            <CardImg top width="363" src = "" alt="Dish Image" />
                            <CardBody>
                            <CardTitle style={{color:"#D32323", fontWeight:"bold",fontSize:18}}>{i.restname}</CardTitle>
                            <CardSubtitle style={{fontSize:16,marginTop:10}}>{i.email}</CardSubtitle>
                            <CardText style={{marginTop:10}}>{i.description}</CardText>
                            <CardText style={{color:"#D32323", fontWeight:"bold",fontSize:16}}>{i.zipcode}</CardText>
                            <Link style={{fontWeight: "bold", fontSize: 17}} className='button' to={`/viewUniRest/${i._id}`}>Visit</Link>
                            </CardBody>
                        </Card>
                        <br></br>
                    </div>
                )
            })
        }
        return (
                <div>
                    <div style={{marginLeft:180}}>
                        {this.state.displaypage.map(i => {
                            return(
                                <button style={{marginLeft: 30,borderRadius:100, borderWidth:0.5, backgroundColor:"#d32323", color:"white", fontWeight:"bold", marginBottom: 10}} onClick={this.selectPage} value={i}>{i}</button>
                            )
                        })}
                    </div>
                    {temp}
                </div>
            )
    }
}

function mapDispatchToProps(dispatch){
    return{
        getRestaurants: user => dispatch(getRestaurants(user))
    };
}

function mapStateToProps(store){
    console.log(store);
    return{
        message: store.info,
        restaurants: store.restaurants
    };
}

const ViewRestaurants = connect(mapStateToProps, mapDispatchToProps)(ViewRest);
export default ViewRestaurants;
