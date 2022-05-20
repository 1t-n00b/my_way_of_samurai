import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/store";

type HeaderComponentType = {
    isAuth: boolean
    login: string
    getAuthUserData: () => void
}


class HeaderContainer extends React.Component<HeaderComponentType> {
    componentDidMount() {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
        // authAPI.me()
        //     .then(response => {
        //         if (response.data.resultCode === 0) {
        //             let {id, email, login} = response.data.data
        //             this.props.setAuthUserDataAC(id, email, login)
        //         }
        //     })
        this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: RootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.data.login,
})


export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)