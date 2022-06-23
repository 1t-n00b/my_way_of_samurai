import React, {JSXElementConstructor} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, ProfileType, updateStatus} from "../../redux/profile_reducer";
import {Params, useLocation, useNavigate, useParams} from "react-router-dom";
import {NavigateFunction} from "react-router";
import {AppStateType} from "../../redux/redux-store";


type ProfilePropsType = {
    profile: ProfileType,
    getUserProfile: (userID: number) => void
    router: {
        location: Location,
        navigate: NavigateFunction,
        params: Params
    }
    status: string,
    getStatus: (userID: number) => void,
    updateStatus: (status: string) => void,
}

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {

        let userID: number | undefined = Number(this.props.router.params.userID);
        if (!userID) {
            userID=23045
        }
        this.props.getUserProfile(userID)
        this.props.getStatus(userID);
    }

    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        );
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})
export const withRouter = <T,>(Component: JSXElementConstructor<T>): JSXElementConstructor<any> => {
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


// export default withAuthRedirect(connect(mapStateToProps, {getUserProfile, getStatus, updateStatus})(withRouter(ProfileContainer)));
export default connect(mapStateToProps, {getUserProfile, getStatus, updateStatus})(withRouter(ProfileContainer));
// export default compose<React.ComponentType>(
//     withAuthRedirect,
//     connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
//     withRouter
// )(ProfileContainer)