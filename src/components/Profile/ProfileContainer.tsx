import React, {JSXElementConstructor} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile_reducer";
import {ProfileType, RootStateType} from "../../redux/store";
import {Params, useLocation, useNavigate, useParams} from "react-router-dom";
import {NavigateFunction} from "react-router";


type ProfilePropsType = {
    profile: ProfileType,
    setUserProfile: (profile: ProfileType) => void
    router: {
        location: Location,
        navigate: NavigateFunction,
        params: Params
    }
}

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {

        let userID: string | undefined = this.props.router.params.userID;

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state: RootStateType) => ({
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


export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));