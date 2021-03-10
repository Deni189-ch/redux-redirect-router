import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import {setLoginOut} from "../../../redux/actions";

import "./style.scss";


export const Navbar = ({isAuth}) => {
    const dispatch = useDispatch()

    const logOutHandler = () => {
        dispatch(setLoginOut(false))
    }

    return (
        <div className="navbar">

            <NavLink to="/main" className="navbar__link" activeClassName="navbar__link-active">Main page</NavLink>

            <NavLink to="/news" className="navbar__link" activeClassName="navbar__link-active">News</NavLink>
            
            <NavLink to="/login" className="navbar__link" activeClassName="navbar__link-active" >
               {(!isAuth)  ? 'Login' : <span className="navbar__log-out" onClick={logOutHandler}>Log out</span> }
            </NavLink>

        </div>
    )
};
