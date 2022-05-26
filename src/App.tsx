import NavBar from "./components/Navbar/NavBar";
import {Route, Routes} from "react-router-dom";
import "./App.css";
import React from "react";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";



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

const App: React.FC = () => {
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

export default App;