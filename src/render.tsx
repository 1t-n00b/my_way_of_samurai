import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App, { DialogType, FriendType, MessageType, PostsType} from "./App";
import {addPost, updateNewPostText} from "./redux/state";


export const renderPage = ( state: {
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

                            }) => {
    ReactDOM.render(
        <BrowserRouter>
                <App  state={state} addPost={addPost}  updateNewPostText={updateNewPostText}/>
    </BrowserRouter>,document.getElementById('root')
);
}