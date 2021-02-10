import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import {MDBBtn, MDBNav, MDBNavItem, MDBNavLink, MDBTable, MDBTableBody, MDBTableHead} from "mdbreact";
import axios from "axios";

const User = props => (
    <tr>
        <td>{props.user.username}</td>
        <td>{props.user.email}</td>
        <td>{props.user.contact}</td>
    </tr>
)

class HomePageAdmin extends Component {

    constructor(props) {
        super(props);

        this.state = {users: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/users/')
            .then(response => {
                this.setState({ users: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    userList() {
        return this.state.users.map(currentUser => {
            return <User user={currentUser}  key={currentUser._id}/>;
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
                            <th>Username</th>
                            <th>Email</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                    { this.userList() }
                    </tbody>
                </table>
            </div>
            </BrowserRouter>

        );
    }
}

export default HomePageAdmin;