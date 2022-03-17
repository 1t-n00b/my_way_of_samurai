import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs"
import {Route, Routes} from "react-router-dom";
import "./App.css";
import store, {ActionsTypes, StoreType} from "./redux/state";
import React from "react";

export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type FriendType = {
    id: number
    firstName: string
    secondName: string
    ava: string

}

export type AppType = {
    store: StoreType,
    dispatch: (action: ActionsTypes) => void
}

const App: React.FC<AppType> = (props) => {
    const state = props.store.getState();
    return (
        <div>

            <div className="app-wrapper">
                <Header/>
                <NavBar state={state.sidebar}/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs/*"
                               element={<Dialogs
                                   state={state.dialogsPage}/>}/>
                        <Route path="/profiles" element={<Profile
                            profilePage={state.profilePage}
                            dispatch={store.dispatch.bind(store)}

                        />}/>
                    </Routes>
                </div>

            </div>

        </div>
    );
}

export default App;