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

class Buy extends Component {
    render() {
        return (
            <div>
                <section className="text-center my-5">
                    <h2 className="h1-responsive font-weight-bold my-5">
                        Buy your Property!
                    </h2>

                    <p className="grey-text w-responsive mx-auto mb-5">
                        Buy your desired property from a wide range of our available selling properties
                    </p>

                    <MDBRow className="d-flex justify-content-center">
                        <MDBCol md="6" xl="5" className="mb-4">
                            <MDBView className="overlay rounded z-depth-2" waves>
                                <img
                                    src="https://ap.rdcpix.com/c6307bbb7123fd79928f1e86f0cfd4d0l-m1420829311od-w1024_h768.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </MDBView>
                            <MDBCardBody className="pb-0">
                                <a href="#" className="green-text">
                                    <h5 className="font-weight-bold mt-2 mb-3">
                                        <MDBIcon fas icon="chart-line" className="pr-2" />
                                        House for Sale - Gampaha
                                    </h5>
                                </a>
                                <h4 className="font-weight-bold mb-3">LKR 7,800,000</h4>
                                <p>
                                    Home has 2 units - Ground floor has 2 bedrooms,Upper unit is a one bedroom. Home has been insulated,wrapped & sided with soffit and facier,eavestrough & down spouts.
                                </p>
                                <MDBBtn color="success" rounded a href="/buyp1">
                                    View more
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCol>
                        <MDBCol md="6" xl="5" className="mb-4">
                            <MDBView className="overlay rounded z-depth-2" waves>
                                <img
                                    src="https://ap.rdcpix.com/dcfb9a8b2745d19393af7466b8132db9l-w4147586078od-w1024_h768.jpg"
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
                                        Luxury House for Sale - Colombo 5
                                    </h5>
                                </a>
                                <h4 className="font-weight-bold mb-3">LKR 15,000,000</h4>
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
                                    src="https://ap.rdcpix.com/1af8b899feec25e75af751b53233ee8cl-w4149888906od-w1024_h768.jpg"
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
                                        House for Sale - Kalutara
                                    </h5>
                                </a>
                                <h4 className="font-weight-bold mb-3">LKR 45,000,000</h4>
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
                                    src="https://ap.rdcpix.com/c7afbec8edc4ceeb5d0712ed5f25ea30l-w4252078171od-w1024_h768.jpg"
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
                                        House for Sale - NuwaraEliya
                                    </h5>
                                </a>
                                <h4 className="font-weight-bold mb-3">LKR 25,000,000</h4>
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

export default Buy;