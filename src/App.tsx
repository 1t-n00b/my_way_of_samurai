import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs"
import {BrowserRouter, Route, Routes} from 'react-router-dom';


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

type AppType = {
    state: {
        profilePage : {
            posts : Array<PostsType>
    },
        dialogsPage : {
            dialogs : Array<DialogType>
            messages : Array<MessageType>
        }

    }
}

function App(props: AppType) {
    return (
        <div>
            <BrowserRouter>
                <div className='app-wrapper'>
                    <Header/>
                    <NavBar/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path='/dialogs/*'
                                   element={<Dialogs /*dialogs={props.state.dialogsPage.dialogs}
                                                     messages={props.state.dialogsPage.messages}*/
                                   state ={props.state.dialogsPage}/>}/>
                            <Route path='/profiles' element={<Profile state={props.state.profilePage}/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>)
        </div>
    );
}

export default App;
