import React, { Component } from 'react'
import HeaderBar from '../HeaderBar/HeaderBar'
import { Rating } from '@material-ui/lab';
import { Button } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faDirections, faMailBulk, faPhone, faStar, faUtensilSpoon } from '@fortawesome/free-solid-svg-icons';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { connURL } from '../../Configure';
import { connect } from 'react-redux'
import { addToCart, getAllDish, getUniqRest, postingReview } from '../../js/actions';

class ViewUniRest extends Component {

    constructor(){
        super();
        this.state = {  
            rest: [],
            nodishes: true.restid,
            dishes: [],
            displaypage: [],
            currentpage: [],
            allDishes: []
        }
    }
    
    reviewnumber = (e) => {
        this.setState({
            reviewnumber : e.target.value
        })
    }

    reviewdesc = (e) => {
        this.setState({
            reviewdesc :e.target.value
        })
    }

    submitReviewAdd = (e) => {
        e.preventDefault();
        console.log("USERNAME IS:"+this.state.firstname)
        const data1 = {
            restid: this.props.match.params.restid,
            reviewnumber: this.state.reviewnumber,
            reviewdesc: this.state.reviewdesc, 
            userid:window.sessionStorage.getItem("UserID"),
            username: this.state.firstname
        }
        console.log(data1)
        this.props.postingReview(data1)
    }

    submitAddToCart = (dishid) => {
        const data = {
            restid: this.props.match.params.restid,
            userid:window.sessionStorage.getItem("UserID"),
            dishid: dishid,
            // restname: this.state.rest.restname
        }
        this.props.addToCart(data)
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
        console.log("In UNIQ REST" +this.props.match.params.restid)    
        var data = {
            userid : this.props.match.params.restid
        }
        console.log(data)
        this.props.getUniqRest(data)
        this.props.getAllDish(data)
    }

    render() {
        let temp = null;
        if(this.props.dishes !== undefined){
            temp = this.state.currentpage.map( i => {
                return (
                    <Card style={{width:350,borderStyle:"solid",borderWidth:1, marginTop: 10, borderRadius: 3, padding: 5, borderColor: "#cfcfcf"}}>
                        <CardImg top width="100%" height="250px"src = "" alt="Dish Image" />
                        <CardBody>
                            <CardTitle style={{color:"#D32323", fontWeight:"bold",fontSize:18}}>{i.dishname}</CardTitle>
                            <CardSubtitle style={{fontSize:16,marginTop:10}}>{i.category}</CardSubtitle>
                            <CardText style={{marginTop:10}}>{i.description}</CardText>
                            <CardText style={{color:"#D32323", fontWeight:"bold",fontSize:16}}>$ {i.price}</CardText>
                            <Button style={{width:338, backgroundColor:"#d32323", color: "white", fontWeight: "bold"}}onClick = { () =>this.submitAddToCart(i._id)}>Add to Cart</Button>
                        </CardBody>
                    </Card>
                )
            })
        }
        let temp3 = null;
        if(this.props.rest !== undefined){
            temp3 = this.props.rest.restname
        }
        let temp4 = null;
        if(this.props.rest !== undefined){
            temp4 = this.props.rest.email
        }
        let temp5 = null;
        if(this.props.rest !== undefined){
            temp5 = this.props.rest.phno
        }
        let temp6 = null;
        if(this.props.rest !== undefined){
            temp6 = this.props.rest.restphoto
        }
        let temp7 = null;
        if(this.props.rest !== undefined){
            temp7 = this.props.rest.restphoto2
        }
        let temp8 = null;
        if(this.props.rest !== undefined){
            temp8 = this.props.rest.restphoto3
        }
        let temp9 = null;
        if(this.props.rest !== undefined){
            temp9 = this.props.rest.restphoto4
        }
        return (
            <div>
                <HeaderBar></HeaderBar>
                <div style={{height: 160}}>
                    <div class = "row">
                        <div class = "column-one-rest">
                            <img style={{height:140,width:340}}src = "" alt="Rest Photo1"/>
                        </div>
                        <div class = "column-two-rest">
                            <img style={{height:140,width:340}}src = "" alt="Rest Photo1"/>
                        </div>
                        <div class = "column-three-rest">
                            <img style={{height:140,width:340}}src = "" alt="Rest Photo1"/>
                        </div>
                        <div class = "column-four-rest">
                            <img style={{height:140,width:340}}src = "" alt="Rest Photo1"/>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="column-left-rest" style={{}}>
                        <div class ="column-left-rest">
                            <h1>{temp3}</h1>
                            <Rating name="size-large" defaultValue={2} size="large"/> 46 Reviews
                            <br></br>
                            <h3 style={{color: "green"}}>Open</h3>
                            <h4 style={{color: "#8f8f8f"}}>Timings : 11:00 AM - 7 PM</h4>
                            
                        </div>
                        <div class= "column-right rest">
                        <h3> Enter Your Review</h3>
                            <input type="number" style={{height:30,width:200, borderRadius:5}} placeholder="Rating (Out of 5)" onChange = {this.reviewnumber}></input><br></br>
                            <input type="text" style={{height:30,width:200, borderRadius:5, marginTop:7}} placeholder="Description" onChange = {this.reviewdesc}></input><br></br>
                            <Button onClick={this.submitReviewAdd} style={{backgroundColor:"#d32323", color:"white", marginTop:9, width:200}}><FontAwesomeIcon icon={faStar}></FontAwesomeIcon> &nbsp; Write A Review</Button>
                        </div>
                        <div style={{marginLeft:190}}>
                            <div style= {{marginTop: 50}}>
                                <div style={{marginLeft:100}}>
                                    {this.state.displaypage.map(i => {
                                        return(
                                            <button style={{marginLeft: 30,borderRadius:100, borderWidth:0.5, backgroundColor:"#d32323", color:"white", fontWeight:"bold", marginBottom: 10}} onClick={this.selectPage} value={i}>{i}</button>
                                        )
                                    })}
                                </div>
                                {temp}
                            </div>
                            
                        </div>
                        
                    </div>
                    <div class="column-right-rest">
                        <div style={{marginLeft: 100}}>
                        <div style={{height:141, width:380, padding: 30, borderStyle:"solid", borderRadius:3, borderWidth:1, borderColor:"#cfcfcf"}}>
                            <h3 style = {{marginLeft: 50}}>Mention Yelp for Specials</h3>
                            <Button style={{backgroundColor:"#d32323", color: "white", width:210, marginLeft: 50}}>Buy Now</Button>
                        </div>
                            <div>
                                <ul style={{listStyleType:"none"}}>
                                    <li>
                                        <div style={{height:42}}>
                                            <span><FontAwesomeIcon icon={faMailBulk}/></span>
                                            <span style ={{marginLeft:10}}>{temp4}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div style={{height:42}}>
                                            <span><FontAwesomeIcon icon={faPhone}/></span>
                                            <span style ={{marginLeft:10}}>{temp5}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div style={{height:42}}>
                                            <span><FontAwesomeIcon icon={faDirections}/></span>
                                            <span style ={{marginLeft:10}}>Get Directions</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div style={{height:42}}>
                                            <span><FontAwesomeIcon icon={faUtensilSpoon}/></span>
                                            <span style ={{marginLeft:10}}>Full Menu</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div style={{height:42}}>
                                            <span><FontAwesomeIcon icon={faComment}/></span>
                                            <span style ={{marginLeft:10}} class="cust-link" onClick={this.submitOrders}>Message the Business</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> 
                        
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        getUniqRest: user => dispatch(getUniqRest(user)),
        getAllDish: user => dispatch(getAllDish(user)),
        postingReview: user => dispatch(postingReview(user)),
        addToCart: user => dispatch(addToCart(user))
    };
}

function mapStateToProps(store){
    console.log(store);
    return{
        message: store.info,
        rest: store.rest,
        message2 : store.info2,
        dishes : store.dishes,
        message3: store.info3,
        message4: store.info4
    };
}

const GetUniqueRest = connect(mapStateToProps, mapDispatchToProps)(ViewUniRest);
export default GetUniqueRest;