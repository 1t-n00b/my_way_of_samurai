import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/store";

type HeaderComponentType = {
    isAuth: boolean
    login: string
    setAuthUserDataAC: (id: number, email: string, login: string) => void
}


class HeaderContainer extends React.Component<HeaderComponentType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserDataAC(id, email, login)
                }
            })
    }

    render() {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: RootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.data.login,
})


export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer)