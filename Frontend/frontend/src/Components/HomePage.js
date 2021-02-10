import React, {Component} from 'react';

import "../css/BackgroundImage.css"
import {
    MDBBtn,
    MDBCard, MDBCardBody, MDBCardHeader, MDBCardImage, MDBCardText, MDBCardTitle,
    MDBCarousel,
    MDBCarouselCaption,
    MDBCarouselInner,
    MDBCarouselItem, MDBCol,
    MDBContainer,
    MDBMask, MDBRow,
    MDBView
} from "mdbreact";

class HomePage extends Component {
    render() {
        return (
            <div className="bg">
                <br/>
                <MDBContainer>
                    <MDBCarousel
                        activeItem={1}
                        length={3}
                        showControls={true}
                        showIndicators={true}
                        className="z-depth-1"
                    >
                        <MDBCarouselInner>
                            <MDBCarouselItem itemId="1">
                                <MDBView>
                                    <img
                                        className="d-block w-100 flex-1"
                                        src="https://ap.rdcpix.com/82a825a07227fea29a5bfd0310f43515l-m2756357229od-w1024_h768.jpg"
                                        alt=""
                                    />
                                    <MDBMask overlay="black-light" />
                                </MDBView>
                                <MDBCarouselCaption>
                                    <h3 className="h3-responsive">Luxury House - Nugegoda</h3>
                                    <p>Learn More</p>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2">
                                <MDBView>
                                    <img
                                        className="d-block w-100"
                                        src="https://ap.rdcpix.com/9ece7af07faef8dc2b0b9d3bd3dcbe77l-m4197065771od-w1024_h768.jpg"
                                        alt=""
                                    />
                                    <MDBMask overlay="black-strong" />
                                </MDBView>
                                <MDBCarouselCaption>
                                    <h3 className="h3-responsive">Luxury House - Colombo 3</h3>
                                    <p>Second text</p>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="3">
                                <MDBView>
                                    <img
                                        className="d-block w-100"
                                        src="https://ap.rdcpix.com/31afe4499d9bb7debbe6d564f6967bcdl-m1705264878od-w1024_h768.jpg"
                                        alt=""
                                    />
                                    <MDBMask overlay="black-slight" />
                                </MDBView>
                                <MDBCarouselCaption>
                                    <h3 className="h3-responsive">Luxury House - Kalutara</h3>
                                    <p>Third text</p>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                </MDBContainer>
                {/*end of carousel*/}

                <section className="text-center my-5">
                    <h2 className="h1-responsive font-weight-bold text-center my-5 " >
                        LATEST ADDITIONS
                    </h2>
                    <MDBRow>
                        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                            <MDBCard style={{ width: "22rem", marginTop: "1rem", marginLeft: "10rem" }}>
                                <MDBCardHeader color="purple-gradient">2021 Latest</MDBCardHeader>
                                <MDBView cascade>
                                    <MDBCardImage
                                        hover
                                        overlay='white-slight'
                                        className='card-img-top'
                                        src='https://ap.rdcpix.com/e5c758e663ea0743a175177fce570795l-m243198965od-w1024_h768.jpg'
                                        alt='Card cap'
                                    />
                                </MDBView>
                                <MDBCardBody>
                                    <MDBCardTitle>Apartment </MDBCardTitle>
                                    <MDBCardText>
                                        With supporting text below as a natural lead-in to additional
                                        content.
                                    </MDBCardText>
                                    <MDBBtn color=" purple lighten-1" href="/rentp1">GET IT NOW</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                            <MDBCard style={{ width: "22rem", marginTop: "1rem", marginLeft: "10rem" }}>
                                <MDBCardHeader color="purple-gradient">2021 Latest</MDBCardHeader>
                                <MDBView cascade>
                                    <MDBCardImage
                                        hover
                                        overlay='white-slight'
                                        className='card-img-top'
                                        src='https://ap.rdcpix.com/e5c758e663ea0743a175177fce570795l-m1565958268od-w1024_h768.jpg'
                                        alt='Card cap'
                                    />
                                </MDBView>
                                <MDBCardBody>
                                    <MDBCardTitle>House for Sale</MDBCardTitle>
                                    <MDBCardText>
                                        With supporting text below as a natural lead-in to additional
                                        content.
                                    </MDBCardText>
                                    <MDBBtn color="purple lighten-1" href="#">GET IT NOW</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                            <MDBCard style={{ width: "22rem", marginTop: "1rem", marginLeft: "10rem" }}>
                                <MDBCardHeader color="purple-gradient">2021 Latest</MDBCardHeader>
                                <MDBView cascade>
                                    <MDBCardImage
                                        hover
                                        overlay='white-slight'
                                        className='card-img-top'
                                        src='https://ap.rdcpix.com/e5c758e663ea0743a175177fce570795l-m3626358437od-w1024_h768.jpg'
                                        alt='Card cap'
                                    />
                                </MDBView>
                                <MDBCardBody>
                                    <MDBCardTitle>House for Rent</MDBCardTitle>
                                    <MDBCardText>
                                        With supporting text below as a natural lead-in to additional
                                        content.
                                    </MDBCardText>
                                    <MDBBtn color="purple lighten-1" href="#">GET IT NOW</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </section>

                {/*section 2 starts*/}
                <section className="text-center my-5">
                    <MDBRow >
                        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                            <MDBCard style={{ width: "22rem", marginTop: "1rem", marginLeft: "10rem" }}>
                                <MDBCardHeader color="purple-gradient">2021 Latest</MDBCardHeader>
                                <MDBView cascade>
                                    <MDBCardImage
                                        hover
                                        overlay='white-slight'
                                        className='card-img-top'
                                        src='https://ap.rdcpix.com/e5c758e663ea0743a175177fce570795l-m243198965od-w1024_h768.jpg'
                                        alt='Card cap'
                                    />
                                </MDBView>
                                <MDBCardBody>
                                    <MDBCardTitle>Apartment for Sale</MDBCardTitle>
                                    <MDBCardText>
                                        With supporting text below as a natural lead-in to additional
                                        content.
                                    </MDBCardText>
                                    <MDBBtn color=" purple lighten-1" href="/rentp1">GET IT NOW</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                            <MDBCard style={{ width: "22rem", marginTop: "1rem", marginLeft: "10rem" }}>
                                <MDBCardHeader color="purple-gradient">2021 Latest</MDBCardHeader>
                                <MDBView cascade>
                                    <MDBCardImage
                                        hover
                                        overlay='white-slight'
                                        className='card-img-top'
                                        src='https://ap.rdcpix.com/e5c758e663ea0743a175177fce570795l-m1565958268od-w1024_h768.jpg'
                                        alt='Card cap'
                                    />
                                </MDBView>
                                <MDBCardBody>
                                    <MDBCardTitle>House for Sale</MDBCardTitle>
                                    <MDBCardText>
                                        With supporting text below as a natural lead-in to additional
                                        content.
                                    </MDBCardText>
                                    <MDBBtn color="purple lighten-1" href="#">GET IT NOW</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                            <MDBCard style={{ width: "22rem", marginTop: "1rem", marginLeft: "10rem" }}>
                                <MDBCardHeader color="purple-gradient">2021 Latest</MDBCardHeader>
                                <MDBView cascade>
                                    <MDBCardImage
                                        hover
                                        overlay='white-slight'
                                        className='card-img-top'
                                        src='https://ap.rdcpix.com/e5c758e663ea0743a175177fce570795l-m3626358437od-w1024_h768.jpg'
                                        alt='Card cap'
                                    />
                                </MDBView>
                                <MDBCardBody>
                                    <MDBCardTitle>House for Rent</MDBCardTitle>
                                    <MDBCardText>
                                        With supporting text below as a natural lead-in to additional
                                        content.
                                    </MDBCardText>
                                    <MDBBtn color="purple lighten-1" href="#">GET IT NOW</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                    </MDBRow>
                </section>


                <br/>
                <br/>
                <br/>


            </div>
        );
    }
}

export default HomePage;