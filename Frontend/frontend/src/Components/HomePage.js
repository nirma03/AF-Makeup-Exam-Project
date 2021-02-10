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
                                        src="https://wallpapercave.com/wp/wp3049337.jpg"
                                        alt="First slide"
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
                                        src="https://wallpapercave.com/wp/wp3049337.jpg"
                                        alt="Second slide"
                                    />
                                    <MDBMask overlay="black-strong" />
                                </MDBView>
                                <MDBCarouselCaption>
                                    <h3 className="h3-responsive">Strong mask</h3>
                                    <p>Second text</p>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="3">
                                <MDBView>
                                    <img
                                        className="d-block w-100"
                                        src="https://wallpapercave.com/wp/wp3049337.jpg"
                                        alt="Third slide"
                                    />
                                    <MDBMask overlay="black-slight" />
                                </MDBView>
                                <MDBCarouselCaption>
                                    <h3 className="h3-responsive">Slight Mast</h3>
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
                                        src='http://www.hgnv.com/wp-content/uploads/2016/12/building-a-tiny-house-720x500.jpg'
                                        alt='Card cap'
                                    />
                                </MDBView>
                                <MDBCardBody>
                                    <MDBCardTitle>Desperados III </MDBCardTitle>
                                    <MDBCardText>
                                        With supporting text below as a natural lead-in to additional
                                        content.
                                    </MDBCardText>
                                    <MDBBtn color=" purple lighten-1" href="https://desperadosgame.com/">GET IT NOW</MDBBtn>
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
                                        src='http://www.hgnv.com/wp-content/uploads/2016/12/building-a-tiny-house-720x500.jpg'
                                        alt='Card cap'
                                    />
                                </MDBView>
                                <MDBCardBody>
                                    <MDBCardTitle>Huntdown</MDBCardTitle>
                                    <MDBCardText>
                                        With supporting text below as a natural lead-in to additional
                                        content.
                                    </MDBCardText>
                                    <MDBBtn color="purple lighten-1" href="https://huntdown.com/">GET IT NOW</MDBBtn>
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
                                        src='http://www.hgnv.com/wp-content/uploads/2016/12/building-a-tiny-house-720x500.jpg'
                                        alt='Card cap'
                                    />
                                </MDBView>
                                <MDBCardBody>
                                    <MDBCardTitle>Minecraft Dungeons</MDBCardTitle>
                                    <MDBCardText>
                                        With supporting text below as a natural lead-in to additional
                                        content.
                                    </MDBCardText>
                                    <MDBBtn color="purple lighten-1" href="https://www.xbox.com/en-US/games/minecraft-dungeons">GET IT NOW</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </section>

                {/*section 2 starts*/}
                <section className="text-center my-5">
                    <h2 className="h1-responsive font-weight-bold text-center my-5 " >
                       PRICE DROPS
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
                                        src='http://www.hgnv.com/wp-content/uploads/2016/12/building-a-tiny-house-720x500.jpg'
                                        alt='Card cap'
                                    />
                                </MDBView>
                                <MDBCardBody>
                                    <MDBCardTitle>Desperados III </MDBCardTitle>
                                    <MDBCardText>
                                        With supporting text below as a natural lead-in to additional
                                        content.
                                    </MDBCardText>
                                    <MDBBtn color="purple lighten-1" href="https://desperadosgame.com/">GET IT NOW</MDBBtn>
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
                                        src='http://www.hgnv.com/wp-content/uploads/2016/12/building-a-tiny-house-720x500.jpg'
                                        alt='Card cap'
                                    />
                                </MDBView>
                                <MDBCardBody>
                                    <MDBCardTitle>Huntdown</MDBCardTitle>
                                    <MDBCardText>
                                        With supporting text below as a natural lead-in to additional
                                        content.
                                    </MDBCardText>
                                    <MDBBtn color="purple lighten-1" href="https://huntdown.com/">GET IT NOW</MDBBtn>
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
                                        src='http://www.hgnv.com/wp-content/uploads/2016/12/building-a-tiny-house-720x500.jpg'
                                        alt='Card cap'
                                    />
                                </MDBView>
                                <MDBCardBody>
                                    <MDBCardTitle>Minecraft Dungeons</MDBCardTitle>
                                    <MDBCardText>
                                        With supporting text below as a natural lead-in to additional
                                        content.
                                    </MDBCardText>
                                    <MDBBtn color="purple lighten-1" href="https://www.xbox.com/en-US/games/minecraft-dungeons">GET IT NOW</MDBBtn>
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