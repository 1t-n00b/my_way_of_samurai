import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/Posts/ProfileInfo/ProfileInfo";

import userPost from "./userPost";
import {DialogType, MessageType, PostsType} from "../../App";

type ProfileType = {
    state: {
        posts : Array<PostsType>
    }
}


 
function Profile(props : ProfileType) {
   

    return (
        <div>
            <ProfileInfo/>
            <MyPosts post={props.state.posts}/>

        </div>
    )
}

export default Profile