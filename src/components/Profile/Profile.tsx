import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/Posts/ProfileInfo/ProfileInfo";
import {PostsType} from "../../App";
import {ActionsTypes} from "../../redux/store";

type ProfileType = {
    profilePage: {
        posts: Array<PostsType>
        newPostText: string
    },
    dispatch: (action: ActionsTypes) => void
}

function Profile(props: ProfileType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts post={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                // addPost={props.addPost}
                // updateNewPostText={props.updateNewPostText}
                     dispatch={props.dispatch}
            />

        </div>
    )
}

export default Profile