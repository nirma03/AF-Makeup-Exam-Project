import React, {Component} from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBCardTitle,
    MDBCardText,
    MDBCard,
    MDBModal,
    MDBModalHeader, MDBModalBody, MDBModalFooter
} from 'mdbreact';
import Lightbox from "react-image-lightbox";
import "../css/Lightbox.css";

class RentPro1 extends Component {
    state = {
        photoIndex: 0,
        isOpen: false,
        images: [
            // 360x360 images
            'https://i.pinimg.com/474x/5a/17/e7/5a17e76d355fd97d9b48fc228b75f39d.jpg',
            'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg',
            'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg',
            'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg',
            'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg',
            'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg',
            'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg',
            'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg',
            'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg'
        ]
    }

    renderImages = () => {
        let photoIndex = -1;
        const { images } = this.state;

        return images.map(imageSrc => {
            photoIndex++;
            const privateKey = photoIndex;
            return (
                <MDBCol md="4" key={photoIndex}>
                    <figure>
                        <img src={imageSrc} alt="Gallery" className="img-fluid" onClick={()=>
                            this.setState({ photoIndex: privateKey, isOpen: true })
                        }
                        />
                    </figure>
                </MDBCol>
            );
        })
    }

    render() {
        const { photoIndex, isOpen, images } = this.state;
        return (
            <MDBContainer className="mt-5">
                    <h2 className="font-weight-bold my-5 text-center">Rent Property -1</h2>
                <MDBRow className="d-flex justify-content-center">
                <MDBBtn color="deep-purple">Contact Admin to book an appointment</MDBBtn>
                </MDBRow>
                <MDBRow className="d-flex justify-content-center">
                    <MDBContainer>
                        <MDBCard className="card-body" style={{ width: "40rem", marginTop: "1rem",
                            marginLeft:"15rem", marginRight: "24rem"}}>
                            <MDBCardTitle>Code: RP001</MDBCardTitle>
                            <MDBCardText>
                                <h3 className="font-weight-bold my-5 text-center">LRK 50,000 per month</h3>
                                <p>Location: No.25, Pagoda Rd, Nugegoda</p>
                                <p>single-storeyed, 2 bedrooms, 2 bathrooms, 1 kitchen</p>
                            </MDBCardText>
                        </MDBCard>
                    </MDBContainer>
                </MDBRow>
                <br/>
                <br/>
                <div className="mdb-lightbox">
                    <MDBRow>
                        {this.renderImages()}
                    </MDBRow>
                </div>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        imageTitle={photoIndex + 1 + "/" + images.length}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length
                            })
                        }
                    />
                )}
                <br/>
                <br/>
                <br/>
                <br/>
                {/*modal on booking an appoitment*/}

            </MDBContainer>


        );
    }
}


export default RentPro1;