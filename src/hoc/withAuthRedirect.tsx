import React, {ComponentType} from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";



type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType):MapStatePropsType => {
  return {
      isAuth: state.auth.isAuth
  }
}
export function withAuthRedirect<T>(Component: ComponentType<T>)  {
    // debugger
    const RedirectComponent = (props: MapStatePropsType) => {
        // debugger
        let {isAuth, ...restProps} = props
         if (!isAuth) return <Navigate to="/login"/>
        return <Component  {...restProps as T}/>
    }
    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}