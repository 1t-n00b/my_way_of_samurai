import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs"
import {Route, Routes} from 'react-router-dom';
import './App.css';


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
    state: {
        profilePage: {
            posts: Array<PostsType>
            newPostText: string
        },
        dialogsPage: {
            dialogs: Array<DialogType>
            messages: Array<MessageType>
        },
        sidebar: {
            friends: Array<FriendType>
        }

    },
    addPost: (somePost: string) => void
    updateNewPostText: (newText: string) => void


}


function App(props: AppType) {

    return (
        <div>

            <div className='app-wrapper'>
                <Header/>
                <NavBar state={props.state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*'
                               element={<Dialogs
                                   state={props.state.dialogsPage}/>}/>
                        <Route path='/profiles' element={<Profile
                            profilePage={props.state.profilePage}
                            addPost={props.addPost}

                            updateNewPostText={props.updateNewPostText}
                        />}/>
                    </Routes>
                </div>

            </div>

        </div>
    );
}

export default App;