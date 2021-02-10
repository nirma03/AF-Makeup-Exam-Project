import React from "react";
import { Route } from "react-router-dom";
import { isLogin } from "./reactAuth";
import { TOKEN_UTYPE } from "../config";

//Redirecting management
const RedirectTo = () => {
    const userType = localStorage.getItem(TOKEN_UTYPE);
    if (userType === "customer") {
        window.location = "/customerHome";
    } else if (userType === "admin") {
        window.location = "/adminHome";
    }
};

//Public route Management
//All the public route will handle from this function

/*
Component - Component which should redirect to
restricted - check path is restricted if user is logged in. ex: if user is already login to the system
    it cannot display login page again. It should redirect to that user's Home page with help of RedirectTo function
...rest contain path if user not logged in to system show that path. if user logged in but path is restricted
    redirect to that relevant users Homepage.

*/
const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                isLogin() && restricted ? <RedirectTo /> : <Component {...props} />
            }
        />
    );
};

export default PublicRoute;
