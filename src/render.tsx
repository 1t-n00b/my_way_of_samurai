import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, RootStateType, updateNewPostText} from "./redux/state";


export const renderPage = ( state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
                <App  state={state} addPost={addPost}  updateNewPostText={updateNewPostText}/>
    </BrowserRouter>,document.getElementById('root')
);
}