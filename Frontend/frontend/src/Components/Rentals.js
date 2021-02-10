import React, {Component} from 'react';
import {
    MDBBtn,
    MDBCardBody,
    MDBCol,
    MDBIcon,
    MDBMask,
    MDBView,
    MDBRow,
    MDBFormInline
} from "mdbreact";

class Rentals extends Component {
    render() {
        return (
            <div>
                <section className="text-center my-5">
                    <h2 className="h1-responsive font-weight-bold my-5">
                        Look out  a property for rent!
                    </h2>

                    <p className="grey-text w-responsive mx-auto mb-5">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        est laborum.
                    </p>

                    <MDBRow className="d-flex justify-content-center">
                        <MDBCol md="6" xl="5" className="mb-4">
                            <MDBView className="overlay rounded z-depth-2" waves>
                                <img
                                    src="https://ap.rdcpix.com/8e3618b85e7e11a22ddaa32fe085a797l-m1818873077xd-w1020_h770_q80.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </MDBView>
                            <MDBCardBody className="pb-0">
                                <a href="#!" className="green-text">
                                    <h5 className="font-weight-bold mt-2 mb-3">
                                        <MDBIcon fas icon="chart-line" className="pr-2" />
                                        Apartment for Rent - Nugegoda
                                    </h5>
                                </a>
                                <h4 className="font-weight-bold mb-3">LKR 60,000/month</h4>
                                <p>
                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                                    amet, consectetur, adipisci velit cupidatat proident
                                    voluptatem quia numquam.
                                </p>
                                <MDBBtn color="success" rounded a href="/rentp1">
                                    View More
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCol>
                        <MDBCol md="6" xl="5" className="mb-4">
                            <MDBView className="overlay rounded z-depth-2" waves>
                                <img
                                    src="https://ap.rdcpix.com/98a0e38ae568e19e4384f42a510b9f00l-m727219130xd-w1020_h770_q80.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </MDBView>
                            <MDBCardBody className="pb-0">
                                <a href="#!" className="blue-text">
                                    <h5 className="font-weight-bold mt-2 mb-3">
                                        <MDBIcon icon="chart-line" className="pr-2" />
                                        House for Rent - Maharagama
                                    </h5>
                                </a>
                                <h4 className="font-weight-bold mb-3">LKR 40,000</h4>
                                <p>
                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                                    amet, consectetur, adipisci velit cupidatat proident
                                    voluptatem quia numquam.
                                </p>
                                <MDBBtn color="success" rounded>
                                    View more
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCol>
                        <MDBCol md="6" xl="5" className="mb-4">
                            <MDBView className="overlay rounded z-depth-2" waves>
                                <img
                                    src="https://ap.rdcpix.com/d49599bd43b1e17a27d4a618fb4961e9l-m3981646961xd-w1020_h770_q80.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </MDBView>
                            <MDBCardBody className="pb-0">
                                <a href="#!" className="brown-text">
                                    <h5 className="font-weight-bold mt-2 mb-3">
                                        <MDBIcon icon="chart-line" className="pr-2" />
                                        House for Rent - Colombo 7
                                    </h5>
                                </a>
                                <h4 className="font-weight-bold mb-3">LKR 80,000</h4>
                                <p>
                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                                    amet, consectetur, adipisci velit cupidatat proident
                                    voluptatem quia numquam.
                                </p>
                                <MDBBtn color="success" rounded>
                                    View more
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCol>
                        <MDBCol md="6" xl="5" className="mb-4">
                            <MDBView className="overlay rounded z-depth-2" waves>
                                <img
                                    src="https://ap.rdcpix.com/f9b8d3c3760629f25beeb8264af3c0dfl-m3409668427xd-w1020_h770_q80.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </MDBView>
                            <MDBCardBody className="pb-0">
                                <a href="#!" className="cyan-text">
                                    <h5 className="font-weight-bold mt-2 mb-3">
                                        <MDBIcon icon="chart-line" className="pr-2" />
                                        House for Sale - Kandy
                                    </h5>
                                </a>
                                <h4 className="font-weight-bold mb-3">LKR 70,000</h4>
                                <p>
                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                                    amet, consectetur, adipisci velit cupidatat proident
                                    voluptatem quia numquam.
                                </p>
                                <MDBBtn color="success" rounded>
                                    View more
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </section>
                <br/>
                <br/>
            </div>
        );
    }
}

export default Rentals;