import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";


export const withAuthRedirect = (Component) => {

  function RedirectComponent() {
    const isAuth = useSelector(state => state.auth.isAuth)

    if (!isAuth) return <Redirect to="/login" />

    return <Component isAuth={isAuth} />
  }

  return RedirectComponent
};