import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/Posts/ProfileInfo/ProfileInfo";
import {PostsType} from "../../App";




type ProfileType = {
    state: {
        posts : Array<PostsType>
    },
    addPost: (somePost: string) => void
}


 
function Profile(props : ProfileType) {
   

    return (
        <div>
            <ProfileInfo/>
            <MyPosts post={props.state.posts}  addPost={props.addPost}/>

        </div>
    )
}

export default Profile