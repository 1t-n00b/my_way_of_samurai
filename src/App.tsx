import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import "./App.css";
import React from "react";
import {ReduxStoreType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

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
    store: ReduxStoreType,
    // dispatch: (action: ActionsTypes) => void
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
                               element={<DialogsContainer
                                   // store={props.store}
                               />
                        }
                        />
                        <Route path="/profiles" element={<Profile
                            // store={props.store}
                            // profilePage={state.profilePage}
                            // dispatch={props.store.dispatch.bind(props.store)}

                        />}/>
                    </Routes>
                </div>

            </div>

        </div>
    );
}

export default App;