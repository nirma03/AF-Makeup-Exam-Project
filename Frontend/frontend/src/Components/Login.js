import React, {Component} from 'react';
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBCard,
    MDBCardBody,
     MDBModalFooter,
    MDBInput
} from 'mdbreact';
import "../css/Login.css";
import {serverUrl} from "./config";
import axios from "axios";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "./ReactMiddleware/reactAuth";
import "../css/BackgroundImage.css"
import {Form} from "react-bootstrap";

toast.configure();

class Login extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
        };
    }

    onChangeUsername(event){
        this.setState({
            username: event.target.value,
            [event.target.name]: event.target.value

        })
    }

    onChangePassword(event){
        this.setState({
            password: event.target.value,
            [event.target.name]: event.target.value

        })
    }

    onSubmit(e) {
        e.preventDefault();

        const users = {
            username: this.state.username,
            password: this.state.password,
        };
        axios
            .post(serverUrl + "/users/", users)
            .then((response) => {

                //Check user type and redirect to relevant page
                const userType = response.data.user["userType"];
                if (userType === "customer") {
                    toast("Login  Successful");
                    login(response.data.token, response.data.user);
                    window.location = "/";
                } else  {
                    toast("Admin Login  Successful");
                    login(response.data.token, response.data.user);
                    window.location = "/";
                }
            })
            .catch((error) => {
                console.log(error.response);
                toast("Please Check Username or Password");
                this.setState({
                    password: "",
                });
            });
    }


    state = {
        collapseID: ''
    };

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));

    componentDidMount() {
        document.querySelector('nav').style.height = '65px';
    }

    componentWillUnmount() {
        document.querySelector('nav').style.height = 'auto';
    }
    render() {
        const { collapseID } = this.state;
        const navStyle = { marginTop: '65px' };
        const overlay = (
            <div
                id='sidenav-overlay'
                style={{ backgroundColor: 'transparent' }}
                onClick={this.toggleCollapse('navbarCollapse')}
            />
        );
        return (
            <div className="bg">
            <div id='contactformpage'>
                <MDBView>
                    {/*<MDBMask overlay='indigo-strong' />*/}
                    <MDBContainer
                        style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
                        className='d-flex justify-content-center align-items-center'
                    >
                        <MDBRow>
                            <div className='white-text text-center text-md-left col-md-6 mt-xl-5 mb-5'>
                                <h1 className='display-4 font-weight-bold'>SIGN IN NOW! </h1>
                                <hr className='hr-light' />
                                <h6 className='mb-4'>
                                    Login now to look up for your favourite property! We provide you with the most reliable and
                                    efficient services to our customers to help them buy any property for sale and rent
                                </h6>

                            </div>
                            <MDBCol md='6' xl='5' className='mb-4'>
                                <MDBCard className='dark-grey-text'>
                                    <MDBCardBody className='z-depth-2'>
                                        <Form onSubmit={this.onSubmit} >
                                        <h3 className='dark-grey-text text-center'>
                                            <strong>Login</strong>
                                        </h3>
                                        <hr />
                                        <MDBInput label='Username' icon='user' type="text" onChange={this.onChangeUsername}
                                                  value={this.state.username} name="username"
                                                  required  />
                                        <MDBInput label='Password' icon='envelope' type="password" onChange={this.onChangePassword}
                                                  value={this.state.password} name="password"
                                                  required />
                                        <div className='text-center mt-3 black-text'>
                                            <MDBBtn color='indigo' type="submit">Login</MDBBtn>
                                            <br/>
                                            <br/>
                                            <MDBModalFooter>
                                                <div className="font-weight-light">
                                                    <p className="font-small grey-text mt-3">
                                                        Don't have an account?
                                                        <a
                                                            href="/register"
                                                            className="dark-grey-text ml-1 font-weight-bold"
                                                        >
                                                            Sign up
                                                        </a>
                                                    </p>
                                                </div>
                                            </MDBModalFooter>
                                        </div>
                                        </Form>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBView>
            </div>
            </div>
        );
    }
}

export default Login;