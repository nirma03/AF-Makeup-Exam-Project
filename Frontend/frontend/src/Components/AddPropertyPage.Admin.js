import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import {
    MDBBtn, MDBCard, MDBCardBody,
    MDBCol,
    MDBContainer, MDBInput,
    MDBNav,
    MDBNavItem,
    MDBNavLink,
    MDBRow,
    MDBTable,
    MDBTableBody,
    MDBTableHead
} from "mdbreact";
import axios from "axios";
import "../css/BackgroundImage.css"
import {Form} from "react-bootstrap";


class AddPropertyPageAdmin extends Component {

    constructor(props) {
        super(props);

        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductDesc = this.onChangeProductDesc.bind(this);
        this.onChangeProductType = this.onChangeProductType.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onChangeProductOwner = this.onChangeProductOwner.bind(this);
        this.onChangeProductContact = this.onChangeProductContact.bind(this);

        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            productName: '',
            productDesc: '',
            productType: '',
            productPrice: '',
            productOwner: '',
            productContact: '',
            products: []
        }
    }

    onChangeProductName(e) {
        this.setState({
            productName: e.target.value
        })
    }

    onChangeProductDesc(e) {
        this.setState({
            productDesc: e.target.value
        })
    }

    onChangeProductType(e) {
        this.setState({
            productType: e.target.value
        })
    }

    onChangeProductPrice(e) {
        this.setState({
            productPrice: e.target.value
        })
    }


    onChangeProductOwner(e) {
        this.setState({
            productOwner: e.target.value
        })
    }

    onChangeProductContact(e) {
        this.setState({
            productContact: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();

        const product = {
            productName: this.state.productName,
            productDesc: this.state.productDesc,
            productType: this.state.productType,
            productPrice: this.state.productPrice,
            productOwner: this.state.productOwner,
            productContact: this.state.productContact
        }

        console.log(product);

        axios.post('http://localhost:4000/products/add', product)
            .then(res => console.log(res.data));

        window.location = '/adminProperty';
    }

    render() {
        return (
            <div className="bg">
                <BrowserRouter>
                    <div className="d-flex justify-content-center">
                        <MDBBtn color="deep-purple" >Admin Panel</MDBBtn>
                    </div>
                    <div className="d-flex justify-content-center">
                        <MDBBtn color="primary" a href="/adminHome">Available Users</MDBBtn>
                        <MDBBtn color="primary" a href="/adminProperty">Available Property</MDBBtn>
                        <MDBBtn color="primary" a href="/adminAdd">Add New Property</MDBBtn>
                    </div>
                    <br/>
                    <br/>
                    <MDBRow className="d-flex justify-content-end">
                        <MDBCol lg="10" className="lg-0 mb-4">
                            <MDBContainer>
                                <MDBRow>
                                    <MDBCol md="6">
                                        <MDBCard >
                                            <MDBCardBody>
                                                <h3 className='dark-grey-text text-center'>
                                                    <strong>Enter details to add a new property</strong>
                                                </h3>
                                                <hr />
                                                <form onSubmit={this.onSubmit}>
                                                    <div className="grey-text">
                                                        <MDBInput
                                                            label="Property Name "
                                                            icon="user"
                                                            group
                                                            type="text"
                                                            validate
                                                            error="wrong"
                                                            success="right"
                                                            value={this.state.productName}
                                                            onChange={this.onChangeProductName}
                                                        />


                                                        <MDBInput
                                                            label="Property Description"
                                                            icon="user"
                                                            group
                                                            type="text"
                                                            validate
                                                            error="wrong"
                                                            success="right"
                                                            value={this.state.productDesc}
                                                            onChange={this.onChangeProductDesc}
                                                        />


                                                        <MDBInput
                                                            label="Property Type"
                                                            icon="user"
                                                            group
                                                            type="text"
                                                            validate
                                                            error="wrong"
                                                            success="right"
                                                            value={this.state.productType}
                                                            onChange={this.onChangeProductType}
                                                        />


                                                        <MDBInput
                                                            label="Property Price"
                                                            icon="user"
                                                            group
                                                            type="text"
                                                            validate
                                                            error="wrong"
                                                            success="right"
                                                            value={this.state.productPrice}
                                                            onChange={this.onChangeProductPrice}
                                                        />


                                                        <MDBInput
                                                            label="Property Owner"
                                                            icon="user"
                                                            group
                                                            type="text"
                                                            validate
                                                            error="wrong"
                                                            success="right"
                                                            value={this.state.productOwner}
                                                            onChange={this.onChangeProductOwner}
                                                        />
                                                        <MDBInput
                                                            label="Property Owner Contact"
                                                            icon="user"
                                                            group
                                                            type="text"
                                                            validate
                                                            error="wrong"
                                                            success="right"
                                                            value={this.state.productContact}
                                                            onChange={this.onChangeProductContact}
                                                        />
                                                    </div>
                                                    <div className="text-center py-4 mt-3">
                                                        <MDBBtn color="cyan" type="submit">
                                                            Add New Property
                                                        </MDBBtn>
                                                    </div>
                                                </form>

                                                <br/>
                                                <br/>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </MDBCol>
                    </MDBRow>
                    <br/>
                    <br/>
                </BrowserRouter>
            </div>

        );
    }
}
export default AddPropertyPageAdmin;











