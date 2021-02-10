import React, {Component} from 'react';
import {MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput, MDBModalFooter, MDBContainer} from "mdbreact";
import "../css/BackgroundImage.css"


class ContactUs extends Component {
    render() {
        return (
            <div>
                <section className="my-5">
                    <h2 className="h1-responsive font-weight-bold text-center my-5">
                        Contact us
                    </h2>
                    <p className="text-center w-responsive mx-auto pb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                        error amet numquam iure provident voluptate esse quasi, veritatis
                        totam voluptas nostrum quisquam eum porro a pariatur veniam.
                    </p>
                    <MDBRow className="d-flex justify-content-end">
                        <MDBCol lg="10" className="lg-0 mb-4">
                            <MDBContainer>
                                <MDBRow>
                                    <MDBCol md="6">
                                        <MDBCard>
                                            <MDBCardBody>
                                                <form>
                                                    <p className="h4 text-center py-4">Sign up</p>
                                                    <div className="grey-text">
                                                        <MDBInput
                                                            label="Your name"
                                                            icon="user"
                                                            group
                                                            type="text"
                                                            validate
                                                            error="wrong"
                                                            success="right"
                                                        />
                                                        <MDBInput
                                                            label="Your email"
                                                            icon="envelope"
                                                            group
                                                            type="email"
                                                            validate
                                                            error="wrong"
                                                            success="right"
                                                        />
                                                        <MDBInput
                                                            label="Contact"
                                                            icon="exclamation-triangle"
                                                            group
                                                            type="text"
                                                            validate
                                                            error="wrong"
                                                            success="right"
                                                        />
                                                        <MDBInput
                                                            label="Your message"
                                                            icon="lock"
                                                            group
                                                            type="text"
                                                            validate
                                                        />
                                                    </div>
                                                    <div className="text-center py-4 mt-3">
                                                        <MDBBtn color="cyan" type="submit">
                                                            Send
                                                        </MDBBtn>
                                                    </div>
                                                </form>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                    <MDBCol md="6">
                                        <MDBCol md="10">
                                            <MDBBtn tag="a" floating color="blue" className="accent-1">
                                                <MDBIcon icon="map-marker-alt" />
                                            </MDBBtn>
                                            <p>New York, 94126,United States</p>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <MDBBtn tag="a" floating color="blue" className="accent-1">
                                                <MDBIcon icon="phone" />
                                            </MDBBtn>
                                            <p>+ 01 234 567 89</p>
                                            <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <MDBBtn tag="a" floating color="blue" className="accent-1">
                                                <MDBIcon icon="envelope" />
                                            </MDBBtn>
                                            <p>info@gmail.com</p>
                                            <p className="mb-md-0">sale@gmail.com</p>
                                        </MDBCol>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </MDBCol>
                    </MDBRow>
                        <MDBRow className="d-flex justify-content-center">
                        <MDBCol lg="7">
                            <div
                                id="map-container"
                                className="rounded z-depth-1-half map-container"
                                style={{ height: "400px" }}
                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
                                    title="This is a unique title"
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    style={{ border: 0 }}
                                />
                            </div>
                            <br />
                            <MDBRow className="text-center">

                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </section>
                <br/>
                <br/>
                </div>
        );
    }
}

export default ContactUs;