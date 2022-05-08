import NavBar from "./components/Navbar/NavBar";
import {Route, Routes} from "react-router-dom";
import "./App.css";
import React from "react";
import {ReduxStoreType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

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

const App: React.FC<AppType> = () => {
    // const state = props.store.getState();

    return (
        <div>
            <div className="app-wrapper">

                <HeaderContainer/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs/*"
                               element={<DialogsContainer
                                   // store={props.store}
                               />
                               }
                        />
                       {/*/!* <Route path="/profile/*"*/}
                       {/*        element={<ProfileContainer/>}/>*!/*/}
                      {/*  <Route path="/profile/">
                            <Route path=":userId" element={<ProfileContainer />} />
                        </Route>*/}
                           <Route path='/profile/:userID' element={<ProfileContainer/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                    </Routes>
                </div>

            </div>

        </div>
    );
}

export default App;