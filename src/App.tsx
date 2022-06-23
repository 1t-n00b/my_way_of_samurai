import NavBar from "./components/Navbar/NavBar";
import {Route, Routes} from "react-router-dom";
import "./App.css";
import React from "react";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer, {withRouter} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

import {connect} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {Login} from "./components/Login/Login";
import {initializedApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


export type FriendType = {
    id: number
    firstName: string
    secondName: string
    ava: string

}

// export type AppType = {
//     store: AppStateType,
//     // dispatch: (action: ActionsTypes) => void
// }
type  AppPropsType = {
    initializedApp:()=> void
    initialized: boolean
}
class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializedApp()
    }

    render() {
        if (!this.props.initialized){
            return <Preloader/>
        }
        return (
            <div>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <NavBar/>
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                            <Route path='/profile/' element={<ProfileContainer/>}/>
                            <Route path='/profile/:userID' element={<ProfileContainer/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/login" element={<Login/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})


export default connect(mapStateToProps, {initializedApp})(withRouter(App));

