import React, {JSXElementConstructor} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileType} from "../../redux/profile_reducer";
import {Params, useLocation, useNavigate, useParams} from "react-router-dom";
import {NavigateFunction} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {AppStateType} from "../../redux/redux-store";
import { compose } from 'redux';


type ProfilePropsType = {
    profile: ProfileType,
    getUserProfile: (userID: number) => void
    router: {
        location: Location,
        navigate: NavigateFunction,
        params: Params
    }


}

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userID: number | undefined = Number(this.props.router.params.userID);
        this.props.getUserProfile(userID)
    }

    render() {
        // if (!this.props.isAuth) return <Navigate to="/login"/>

        return (
            <Profile profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile

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


// export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer)));

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {getUserProfile}),
    withRouter
)(ProfileContainer)