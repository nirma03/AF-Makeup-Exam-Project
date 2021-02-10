import {
    jwtSecret,
    TOKEN_KEY,
    TOKEN_ID,
    TOKEN_UNAME,
    TOKEN_EMAIL,
    TOKEN_CONTACT,
    TOKEN_UTYPE,
} from "../config";

//All the security authentication contains here

const jwt = require("jsonwebtoken");

//Login validation
export const login = (token, user) => {
    if (!token) {
        console.log("No Token");
    }

    try {
        //Check token is valid in this try catch block.
        //If this fails user will be not loged on
        const decoded = jwt.verify(token, jwtSecret);
        localStorage.setItem(TOKEN_KEY, decoded);
        localStorage.setItem(TOKEN_ID, decoded.id);
        localStorage.setItem(TOKEN_UNAME, user[TOKEN_UNAME]);
        localStorage.setItem(TOKEN_EMAIL, user[TOKEN_EMAIL]);
        localStorage.setItem(TOKEN_CONTACT, user[TOKEN_CONTACT]);
        localStorage.setItem(TOKEN_UTYPE, user[TOKEN_UTYPE]);
        console.log(user);
    } catch (e) {
        console.log("Token Not Valid");
    }
};

//Remove all the configuration in localStorage after log out
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(TOKEN_ID);
    localStorage.removeItem(TOKEN_UNAME);
    localStorage.removeItem(TOKEN_EMAIL);
    localStorage.removeItem(TOKEN_CONTACT);
    localStorage.removeItem(TOKEN_UTYPE);
};

//Check user is login every time running a private route
export const isLogin = () => {
    return !!localStorage.getItem(TOKEN_KEY);
};
