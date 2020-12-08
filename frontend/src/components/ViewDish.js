import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import {connect} from 'react-redux';  
import { dishProfile } from '../js/actions';
import {Link} from 'react-router-dom'
import { connURL } from '../Configure';


class ViewDish extends Component {

    constructor(){
        super();
        this.state = {  
            dishes: [],
            displaypage: [],
            currentpage: [],
            allDishes: []
        }
    }

    componentWillReceiveProps(){
        
        setTimeout(() => {
            console.log("PROPS are ", this.props.restraurants)
            this.setState({
                rest : this.props.restraurants,
                allDishes : this.props.dishes
            })
            var pages = Math.ceil(this.props.dishes.length / 2)
                            this.setState({displaypage:[]})
                            for(var j=1;j<=pages;j++){
                                var joined = this.state.displaypage.concat(j);
                                this.setState({
                                    displaypage: joined
                                })
                            }
            this.setState({
                currentpage: this.props.dishes.slice(0,2)
            })
        }, 0)   
    }

    selectPage = (e) => {
        var startIndex;
        var endIndex;
        startIndex = (e.target.value - 1)*2;
        endIndex = e.target.value*2;
        this.setState({
            currentpage: this.state.allDishes.slice(startIndex, endIndex)
        })
    }

    componentDidMount(){
        var data = {
            dishid :  window.sessionStorage.getItem("UserID")
        }
        this.props.dishProfile(data);
    }

    submitEditDish = (dishid) => {
        console.log(dishid)
        window.location.replace('/editDish')
        
    };
    

    render() {
        let temp = null; 
        if(this.props.dishes !== undefined){
            temp = this.state.currentpage.map(i => {
                return(
                    <div>
                        <Card style={{width:250,borderStyle:"solid",borderWidth:1, padding: 9, borderColor: "#cfcfcf", borderRadius: 4}}>
                            <CardImg top width="100%" height="250px" src = "" alt="Dish Image" />
                            <CardBody>
                            <CardTitle style={{color:"#D32323", fontWeight:"bold",fontSize:18}}>{i.dishname}</CardTitle>
                            <CardSubtitle style={{fontSize:16,marginTop:10}}>{i.category}</CardSubtitle>
                            <CardText style={{marginTop:10}}>{i.description}</CardText>
                            <CardText style={{color:"#D32323", fontWeight:"bold",fontSize:16}}>$ &nbsp; {i.price}</CardText>
                            <Link style={{fontWeight: "bold", fontSize: 17}} className='button' to={`/editDish/${i._id}`}>Add Photo</Link>
                            </CardBody>
                        </Card>
                        <br></br>
                    </div>
                )
            })
        }
        return (
            <div>
                <div style={{marginLeft:50}}>
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
        dishProfile: user => dispatch(dishProfile(user))
    };
}

function mapStateToProps(store){
    console.log(store);
    return{
        message: store.info,
        dishes: store.dishes
    };
}

const DishProfile = connect(mapStateToProps, mapDispatchToProps)(ViewDish);
export default DishProfile;