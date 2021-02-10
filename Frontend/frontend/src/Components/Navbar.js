import React, {Component} from 'react';
import {Button, Form, FormControl, Nav,Navbar} from "react-bootstrap";
import {TOKEN_UNAME, TOKEN_UTYPE} from "./config";
import { isLogin, logout } from "./ReactMiddleware/reactAuth";
import {Input, Link} from "@material-ui/core";
import {MDBInput} from "mdbreact";

class SampleNavbar extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         isLogin: isLogin()
    //     };
    // }
    //
    // handleLogout = () => {
    //     logout();
    //     this.setState({
    //         isLogin: false,
    //     });
    // };

    // handleNameClick = () => {
    //     if (localStorage.getItem(TOKEN_UTYPE) === "customer") {
    //         window.location = "/";
    //     } else if (localStorage.getItem(TOKEN_UTYPE) === "admin") {
    //         window.location = "/";
    //     }
    // };
    // state = {
    //     search: ""
    // }
    onChange = e =>{
        this.setState({search:e.target.value});
    }
    render() {
        // const search= this.state;
        // if(search !== ""){
        //     return null;
        // }

        return (
            <div className="App">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Property.lk</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/buy">Buy</Nav.Link>
                        <Nav.Link href="/rent">Rentals</Nav.Link>
                        <Nav.Link href="/contact">Contact Us</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button className="mr-sm-2" variant="outline-info" a href="/login">Login</Button>
                        {/*<Input label="Search" icon="search" onChange={this.onChange}/>*/}
                        <Button className="mr-sm-2" variant="outline-info" a href="/login">Login</Button>
                        <Button className="mr-sm-2" variant="outline-info" a href="/register">Sign Up</Button>
                    </Form>
                </Navbar>

            </div>
            // <div className="container-fluid">
            //     <div className="row">
            //         <div className="col-md-12">
            //             <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            //                 <button
            //                     className="navbar-toggler"
            //                     type="button"
            //                     data-toggle="collapse"
            //                     data-target="#bs-example-navbar-collapse-1"
            //                 >
            //                     <span className="navbar-toggler-icon"/>
            //                 </button>
            //                 <a className="navbar-brand" href="/">
            //                     <b>PROPERTY.LK</b>
            //                 </a>
            //                 <div
            //                     className="collapse navbar-collapse"
            //                     id="bs-example-navbar-collapse-1"
            //                 >
            //                     <ul className="navbar-nav">
            //                         <li className="ml-5">
            //                             {this.state.isLogin &&
            //                             localStorage.getItem(TOKEN_UTYPE) === "admin" ? (
            //                                 <div className="loged-info">
            //                                     <div className="row">
            //                                         <div className="col-md-auto">
            //                                             <a href="/adminHome">
            //                                                 <button type="button" className="btn btn-primary">Home
            //                                                 </button>
            //                                             </a>
            //                                         </div>
            //                                         <div className="col-md-auto">
            //                                             <a href="#">
            //                                                 <button type="button" className="btn btn-primary">Finance
            //                                                 </button>
            //                                             </a>
            //                                         </div>
            //                                         <div className="col-md-auto">
            //                                             <a href="#">
            //                                                 <button type="button" className="btn btn-primary">Passenger
            //                                                     Trips
            //                                                 </button>
            //                                             </a>
            //                                         </div>
            //                                         <div className="col-md-auto">
            //                                             <a href="#">
            //                                                 <button type="button"
            //                                                         className="btn btn-primary">Overcrowded Buses
            //                                                 </button>
            //                                             </a>
            //                                         </div>
            //                                     </div>
            //                                 </div>
            //                             ) : (
            //                                 <span style={{display: "none"}}> Empty </span>
            //                             )}
            //                             {this.state.isLogin &&
            //                             localStorage.getItem(TOKEN_UTYPE) === "customer" ? (
            //                                 <div className="loged-info">
            //                                     <div className="row">
            //                                         <div className="col-md-auto">
            //                                             <a href="/customerHome">
            //                                                 <button type="button" className="btn btn-primary">Home
            //                                                 </button>
            //                                             </a>
            //                                         </div>
            //                                         <div className="col-md-auto">
            //                                             <a href="/#">
            //                                                 <button type="button" className="btn btn-primary">Add
            //                                                     Credit
            //                                                 </button>
            //                                             </a>
            //                                         </div>
            //                                         <div className="col-md-auto">
            //                                             <a href="/#">
            //                                                 <button type="button" className="btn btn-primary">Fines
            //                                                     List
            //                                                 </button>
            //                                             </a>
            //                                         </div>
            //                                         <div className="col-md-auto">
            //                                             <a href="/#">
            //                                                 <button type="button" className="btn btn-primary">Trip
            //                                                     History
            //                                                 </button>
            //                                             </a>
            //                                         </div>
            //                                     </div>
            //                                 </div>
            //                             ) : (
            //                                 <span style={{display: "none"}}> Empty </span>
            //                             )}
            //                         </li>
            //                     </ul>
            //                     <ul className="navbar-nav ml-md-auto">
            //                         <li className="ml-2">
            //
            //                         </li>
            //                         <li className="nav-item active">
            //                             {this.state.isLogin ? (
            //                                 <div className="row">
            //                                     <div className="col-md-auto">
            //                                         <Link to="" onClick={() => this.handleLogout()}>
            //                                             <a href="/">
            //                                                 <button className="btn btn-sm btn-outline-primary"
            //                                                         type="button">Logout
            //                                                 </button>
            //                                             </a>
            //                                         </Link>
            //                                     </div>
            //                                 </div>
            //                             ) : (
            //
            //                                 <a href="/login">
            //                                     <button className="btn btn-primary my-2 my-sm-0"
            //                                             type="submit">Login
            //                                     </button>
            //                                 </a>
            //                             )}
            //                         </li>
            //                         <br />
            //                         <li className="nav-item dropdown"></li>
            //                     </ul>
            //                 </div>
            //             </nav>
            //         </div>
            //     </div>
            // </div>

        );
    }
}

export default SampleNavbar;