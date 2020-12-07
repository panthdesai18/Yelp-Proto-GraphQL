import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import CustProfile from './components/CustProfile/CustProfile'
import UpdateProfile from './components/UpdateProfile/UpdateProfile'
import UpdatePhoto from './components/CustProfile/UpdatePhoto'
import RestSignUp from './components/SignUp/RestSignUp'
import RestLogin from './components/Login/RestLogin'
import RestProfile from './components/RestProfile/RestProfile'
import UpdateRestProfile from './components/UpdateProfile/UpdateRestProfile'
import AddDish from './components/AddDish/AddDish'
import ViewDish from './components/ViewDish'
import LandingPage from './components/LandingPage/LandingPage'
import LandingRest from './components/LandingPage/LandingRest'
import ViewRest from './components/Views/ViewRest'
import CustRest from './components/CustRest/CustRest'
import ViewUniRest from './components/ViewUniRest/ViewUniRest'
import RestReviews from './components/RestReviews/RestReviews'
import AddEvent from './components/Events/AddEvent'
import ViewRestEvents from './components/Events/ViewRestEvents'
import Maps from './components/Maps/Maps'
import UpdateRestPhoto from './components/RestProfile/UpdateRestPhoto'
import EventRegister from './components/Events/EventRegister'
import RegisteredEvents from './components/Events/RegisteredEvents'
import ViewSearchRest from './components/Views/ViewSearchRest'
import Cart from './components/Cart/Cart'
import RestOrders from './components/Orders/RestOrders'
import CustOrders from './components/Orders/CustOrders'
import CreatedEvents from './components/Events/CreatedEvents'
import EditDish from './components/AddDish/EditDish'
import UpdateRestPhotoTwo from './components/RestProfile/UpdateRestPhotoTwo'
import UpdateRestPhotoThree from './components/RestProfile/UpdateRestPhotoThree'
import UpdateRestPhotoFour from './components/RestProfile/UpdateRestPhotoFour'
import UserProfile from './components/Views/UserProfile'
import Messages from './components/Messages/Messages'
import UserTab from './components/UsersTab/UserTab'
import FollowingUsers from './components/UsersTab/FollowingUsers'
import MessagesCust from './components/Messages/MessagesCust'

class Paths extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <Route path="/login" component={Login} />
                <Route path='/signUp' component={SignUp}/>
                <Route path='/custProfile' component={CustProfile}/>
                <Route path='/updateCust' component={UpdateProfile}/>
                <Route path='/updatePhoto' component={UpdatePhoto}/>
                <Route path='/restSignUp' component={RestSignUp}/>
                <Route path='/restLogin' component={RestLogin}/>
                <Route path='/restProfile' component={RestProfile}/>
                <Route path='/updateRest' component={UpdateRestProfile}/>
                <Route path='/AddDish' component={AddDish}/>
                <Route path='/viewDish' component={ViewDish}/>
                <Route path='/landingPage' component={LandingPage}/>
                <Route path='/restaurants' component={LandingRest}/>
                <Route path='/viewRest' component={ViewRest}/>
                <Route path='/custRest' component={CustRest}/>
                <Route path='/viewUniRest/:restid' component={ViewUniRest}/>
                <Route path='/getReviews' component={RestReviews}/>
                <Route path='/addEvent' component={AddEvent}/>
                <Route path='/getRestEvents' component={ViewRestEvents}/>
                <Route path='/map' component={Maps}/>
                <Route path='/updateRestPhoto' component={UpdateRestPhoto}/>
                <Route path='/eventRegister' component={EventRegister}/>
                <Route path='/registeredEvents' component={RegisteredEvents}/>
                <Route path='/searchRest/:searchLoc' component={ViewSearchRest}/>
                <Route path='/cart' component={Cart}/>
                <Route path='/restOrders' component={RestOrders}/>
                <Route path='/custOrders' component={CustOrders}/>
                <Route path='/createdEvents' component={CreatedEvents}/>
                <Route path='/editDish/:dishid' component={EditDish}/>
                <Route path='/updateRestPhoto2' component={UpdateRestPhotoTwo}/>
                <Route path='/updateRestPhoto3' component={UpdateRestPhotoThree}/>
                <Route path='/updateRestPhoto4' component={UpdateRestPhotoFour}/>
                <Route path='/userProfile/:userid' component={UserProfile}/>
                <Route path='/message/:userid' component={Messages}/>
                <Route path='/custmessage/:userid' component={MessagesCust}/>
                <Route path='/usersTab' component={UserTab}/>
                <Route path='/followingUsers' component={FollowingUsers}/>
                </BrowserRouter>
            </div>
        )
    }
}
export default Paths;
