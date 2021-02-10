import React, {Component} from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBBtn,
    MDBCardTitle,
    MDBCardText,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView, MDBCarousel
} from 'mdbreact';
import Lightbox from "react-image-lightbox";
import "../css/Lightbox.css";
import axios from "axios";
import {serverUrl} from "./config";
import {toast} from "react-toastify";
import {Form} from "react-bootstrap";

class BuyPro1 extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeContact= this.onChangeContact.bind(this);
        this.onChangeMessage= this.onChangeMessage.bind(this);


        this.state = {
            name: "",
            email: "",
            contact: "",
            message:"",
        };
    }

    onChangeName(event){
        this.setState({
            name: event.target.value,
            [event.target.name]: event.target.value

        })
    }
    onChangeEmail(event){
        this.setState({
            email: event.target.value,
            [event.target.name]: event.target.value

        })
    }
    onChangeContact(event){
        this.setState({
            contact: event.target.value,
            [event.target.name]: event.target.value

        })
    }
    onChangeMessage(event){
        this.setState({
            message: event.target.value,
            [event.target.name]: event.target.value

        })
    }

    onSubmit(e) {
        e.preventDefault();
        console.log("Submit button");
        const bookings = {
            name: this.state.username,
            email: this.state.email,
            contact: this.state.contact,
            message: this.state.message,
        };

        if (this.state.contact !== "" && this.state.message !=="") {
            axios
                .post(serverUrl + "/bookings/add", bookings)
                .then((response) => {
                    console.log(bookings);
                    toast("Appointment added Sucessfully!");
                    console.log("booking added!")
                    setTimeout(() => {
                        window.location = "/rent";
                    }, 5000);
                })
                .catch((error) => {
                    console.log(error.response);
                    // toast("Email or Username Exists");
                    // this.setState({
                    //     name: "",
                    //     email: "",
                    //     contact:"",
                    //     message:""
                    // });
                });
        } else {
            toast("Enter contact");
            this.setState({
                contact: "",
            });
        }
    }

    render() {
        // const { photoIndex, isOpen, images } = this.state;
        return (
            <MDBContainer className="mt-5" >
                <h2 className="font-weight-bold my-5 text-center">House for Sale - Gampaha</h2>
                <MDBRow className="d-flex justify-content-center">
                    <MDBContainer>
                        <MDBCard className="card-body" style={{ width: "40rem", marginTop: "1rem",
                            marginLeft:"15rem", marginRight: "24rem"}}>
                            <MDBCardTitle>Code: RP001 <br/><br/>
                                <MDBContainer>
                                    <MDBCarousel
                                        activeItem={1}
                                        length={3}
                                        showControls={true}
                                        showIndicators={false}
                                        className="z-depth-1"
                                        slide
                                    >
                                        <MDBCarouselInner>
                                            <MDBCarouselItem itemId="1">
                                                <MDBView>
                                                    <img
                                                        className="d-block w-100"
                                                        src="https://ap.rdcpix.com/c6307bbb7123fd79928f1e86f0cfd4d0l-m1308610388od-w1024_h768.jpg"
                                                        alt="First slide"
                                                    />
                                                </MDBView>
                                            </MDBCarouselItem>
                                            <MDBCarouselItem itemId="2">
                                                <MDBView>
                                                    <img
                                                        className="d-block w-100"
                                                        src="https://ap.rdcpix.com/c6307bbb7123fd79928f1e86f0cfd4d0l-m2667459506od-w1024_h768.jpg"
                                                        alt="Second slide"
                                                    />
                                                </MDBView>
                                            </MDBCarouselItem>
                                            <MDBCarouselItem itemId="3">
                                                <MDBView>
                                                    <img
                                                        className="d-block w-100"
                                                        src="https://ap.rdcpix.com/c6307bbb7123fd79928f1e86f0cfd4d0l-m1670988995od-w1024_h768.jpg"
                                                        alt="Third slide"
                                                    />
                                                </MDBView>
                                            </MDBCarouselItem>
                                        </MDBCarouselInner>
                                    </MDBCarousel>
                                </MDBContainer>
                                <h3 className="font-weight-bold my-5 text-center">LKR 7,800,000</h3>
                                <p>Location: No.5/A, Station Road, Gampaha </p>
                                <p>Single-storeyed, 2 bedrooms, 2 bathrooms, 1 kitchen</p></MDBCardTitle>
                            <MDBCardText></MDBCardText>
                            <Form onSubmit={this.onSubmit} >
                                <MDBCard>
                                    <MDBCardBody>
                                        <form>
                                            <MDBInput
                                                label="Your name"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                onChange={this.onChangeName}
                                                value={this.state.name} name="name"
                                                required
                                            />
                                            <MDBInput
                                                label="Your email"
                                                icon="envelope"
                                                group
                                                type="email"
                                                validate
                                                error="wrong"
                                                success="right"
                                                onChange={this.onChangeEmail}
                                                value={this.state.email} name="email"
                                                required
                                            />
                                            <MDBInput
                                                label="Contact"
                                                icon="exclamation-triangle"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                onChange={this.onChangeContact}
                                                value={this.state.contact} name="contact"
                                                required
                                            />
                                            <MDBInput
                                                label="Your message"
                                                icon="lock"
                                                group
                                                type="text"
                                                validate
                                                onChange={this.onChangeMessage}
                                                value={this.state.message} name="message"
                                                required
                                            />

                                            <div className="text-center py-4 mt-3">
                                                <MDBBtn color="deep-purple" type="submit" >Contact Admin to book an appointment</MDBBtn>
                                            </div>
                                        </form>
                                    </MDBCardBody>
                                </MDBCard>
                            </Form>
                        </MDBCard>
                    </MDBContainer>
                </MDBRow>
                <br/>
                <br/>
            </MDBContainer>
        );
    }
}

export default BuyPro1;