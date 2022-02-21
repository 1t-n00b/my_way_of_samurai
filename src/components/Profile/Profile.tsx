import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/Posts/ProfileInfo/ProfileInfo";
import {PostsType} from "../../App";
import {updateNewPostText} from "../../redux/state";




type ProfileType = {
    profilePage: {
        posts : Array<PostsType>
        newPostText: string
    },
    addPost: (somePost: string) => void
    updateNewPostText:(newText:string) =>void
}


 
function Profile(props : ProfileType) {
   

    return (
        <div>
            <ProfileInfo/>
            <MyPosts post={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText }
            />

        </div>
    )
}

export default Profile