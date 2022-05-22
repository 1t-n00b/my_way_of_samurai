import React, {JSXElementConstructor} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile_reducer";
import {ProfileType, RootStateType} from "../../redux/store";
import {Navigate, Params, useLocation, useNavigate, useParams} from "react-router-dom";
import {NavigateFunction} from "react-router";


type ProfilePropsType = {
    profile: ProfileType,
    getUserProfile: (userID: number) => void
    router: {
        location: Location,
        navigate: NavigateFunction,
        params: Params
    }
    isAuth: boolean

}

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userID: number | undefined = Number(this.props.router.params.userID);
        this.props.getUserProfile(userID)
    }

    render() {
        if (!this.props.isAuth) return <Navigate to="/login"/>

        return (
            <Profile profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state: RootStateType) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})
export const withRouter = (Component: JSXElementConstructor<ProfilePropsType>): JSXElementConstructor<any> => {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}


export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer));