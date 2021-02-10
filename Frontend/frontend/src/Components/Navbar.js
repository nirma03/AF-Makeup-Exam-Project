import React, {Component} from 'react';
import {Button, Form, FormControl, Nav,Navbar} from "react-bootstrap";
import {TOKEN_UNAME, TOKEN_UTYPE} from "./config";
import { isLogin, logout } from "./ReactMiddleware/reactAuth";
import {Input, Link} from "@material-ui/core";
import {MDBInput} from "mdbreact";

class SampleNavbar extends Component {
    onChange = e =>{
        this.setState({search:e.target.value});
    }
    render() {
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
                        <Button className="mr-sm-2" variant="outline-info" >Search</Button>
                        <Button className="mr-sm-2" variant="outline-info" a href="/login">Login</Button>
                        {/*<Input label="Search" icon="search" onChange={this.onChange}/>*/}
                        <Button className="mr-sm-2" variant="outline-info" a href="/register">Sign Up</Button>
                    </Form>
                </Navbar>
            </div>
        );
    }
}

export default SampleNavbar;