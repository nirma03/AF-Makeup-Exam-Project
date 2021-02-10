import React from 'react';
import { BrowserRouter , Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Components/HomePage";
import SampleNavbar from "./Components/Navbar"
import Login from "./Components/Login";
import Register from "./Components/Register";
import Footer from "./Components/Footer";
import PublicRoute from "./Components/ReactMiddleware/PublicRoute";
import PrivateRoute from "./Components/ReactMiddleware/PrivateRoute";
import HomePageAdmin from "./Components/HomePage.Admin";
import HomePageCustomer from "./Components/HomePage.Customer";
import Buy from "./Components/Buy";
import Rentals from "./Components/Rentals";
import ContactUs from "./Components/ContactUs";
import RentPro1 from "./Components/Rent-Pro1";
import BuyPro1 from "./Components/Buy-Pro1";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <SampleNavbar/>
            <Switch>
                {/*<PublicRoute restricted={true} component={HomePage} path="/" exact />*/}
                {/*<PublicRoute restricted={true} component={Login} path="/login" exact />*/}
                {/*<PublicRoute restricted={true} component={Register} path="/register" exact />*/}
                {/*//admin private routes*/}
                {/*<PrivateRoute component={HomePageAdmin} AccessBy={"admin"} path="/adminHome" exact />*/}
                {/*//customer private routes*/}
                {/*<PrivateRoute component={HomePageCustomer} AccessBy={"passenger"} path="/customerHome" exact />*/}
                    <Route exact path="/"  component={HomePage} />
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/buy" component={Buy}/>
                    <Route exact path="/rent" component={Rentals}/>
                     <Route exact path="/contact" component={ContactUs}/>
                    <Route exact path="/rentp1" component={RentPro1}/>
                    <Route exact path="/buyp1" component={BuyPro1}/>
            </Switch>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;