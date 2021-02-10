import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import {MDBBtn, MDBNav, MDBNavItem, MDBNavLink, MDBTable, MDBTableBody, MDBTableHead} from "mdbreact";
import axios from "axios";
import {Link} from "@material-ui/core";

const Product = props => (
    <tr>
        <td>{props.product.productName}</td>
        <td>{props.product.productDesc}</td>
        <td>{props.product.productType}</td>
        <td>{props.product.productPrice}</td>
        <td>{props.product.productOwner}</td>
        <td>{props.product.productContact}</td>
        <td>
            <Link to={"/edit/"+props.product._id}>Edit</Link> || <a href="#" onClick={() => { props.deleteProduct(props.product._id) }}>Delete</a>
        </td>
    </tr>
)

class PropertyPageAdmin extends Component {

    constructor(props) {
        super(props);
        this.deleteProduct = this.deleteProduct.bind(this)
        this.state = {products: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/products/')
            .then(response => {
                this.setState({ products: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteProduct(id) {
        axios.delete('http://localhost:4000/products/'+id)
            .then(response => { console.log(response.data)});

        this.setState({
            products: this.state.products.filter(el => el._id !== id)
        })
    }


    productList() {
        return this.state.products.map(currentProduct => {
            return <Product product={currentProduct}  deleteProduct={this.deleteProduct} key={currentProduct._id}/>;
        })
    }

    render() {
        return (
            <BrowserRouter>

                <div className="w-75 p-4">
                    <MDBBtn color="primary" a href="/adminHome" >Available Users</MDBBtn>
                    <MDBBtn color="primary" a href="/adminProperty">Available Property</MDBBtn>
                    <MDBBtn color="primary" a href="/adminAdd">Add New Property</MDBBtn>
                </div>
                <div className="w-100 p-3">

                <table className="table">
                    <thead className="thead-light">
                    <tr>
                            <th>Property Name</th>
                            <th>Property Description</th>
                            <th>Property Type</th>
                            <th>Property Price</th>
                            <th>Property Owner</th>
                            <th>Property Owner Contact</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    { this.productList() }
                    </tbody>
                </table>
                </div>
            </BrowserRouter>

        );
    }
}

export default PropertyPageAdmin;