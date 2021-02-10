import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import {MDBBtn, MDBNav, MDBNavItem, MDBNavLink, MDBTable, MDBTableBody, MDBTableHead} from "mdbreact";
import axios from "axios";
import {Link} from "@material-ui/core";


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
            productContact:'',
            products: []
        }
    }

onChangeProductName(e)
{
    this.setState({
        productName: e.target.value
    })
}

onChangeProductDesc(e)
{
    this.setState({
        productDesc: e.target.value
    })
}

onChangeProductType(e)
{
    this.setState({
        productType: e.target.value
    })
}

onChangeProductPrice(e)
{
    this.setState({
        productPrice: e.target.value
    })
}


onChangeProductOwner(e)
{
    this.setState({
        productOwner: e.target.value
    })
}

onChangeProductContact(e)
{
    this.setState({
        productContact: e.target.value
    })
}


onSubmit(e)
{
    e.preventDefault();

    const product = {
        productName: this.state.productName,
        productDesc: this.state.productDesc,
        productType: this.state.productType,
        productPrice: this.state.productPrice,
        productOwner: this.state.productOwner,
        productContact:this.state.productContact
    }

    console.log(product);

    axios.post('http://localhost:4000/products/add', product)
        .then(res => console.log(res.data));

    window.location = '/adminProperty';
}

    render()
{
        return (
            <BrowserRouter>

                <div className="w-75 p-4">
                    <MDBBtn color="primary" a href="/adminHome" >Available Users</MDBBtn>
                    <MDBBtn color="primary" a href="/adminProperty">Available Property</MDBBtn>
                    <MDBBtn color="primary" a href="/adminAdd">Add New Property</MDBBtn>
                </div>
                <div className="w-75 p-3">

                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Property name </label>
                            <input  type="text"
                                    required
                                    className="form-control"
                                    value={this.state.productName}
                                    onChange={this.onChangeProductName}
                            />

                        </div>
                        <div className="form-group">
                            <label>Property Description: </label>
                            <input  type="text"
                                    required
                                    className="form-control"
                                    value={this.state.productDesc}
                                    onChange={this.onChangeProductDesc}
                            />
                        </div>
                        <div className="form-group">
                            <label>Property Type: </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.productType}
                                onChange={this.onChangeProductType}
                            />
                        </div>

                        <div className="form-group">
                            <label>Property Price </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.productPrice}
                                onChange={this.onChangeProductPrice}
                            />
                        </div>

                        <div className="form-group">
                            <label>Property Owner </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.productOwner}
                                onChange={this.onChangeProductOwner}
                            />
                        </div>
                        <div className="form-group">
                            <label>Property Owner Contact </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.productContact}
                                onChange={this.onChangeProductContact}
                            />
                        </div>


                        <div className="form-group">
                            <input type="submit" value="Add Property" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
                <br/>
                <br/>
            </BrowserRouter>

        );
    }
}

export default AddPropertyPageAdmin;











