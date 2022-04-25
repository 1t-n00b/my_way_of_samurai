import React from "react";
import ProfileInfo from "./MyPosts/Posts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/store";

type ProfilePropsType = {
    // store: ReduxStoreType,


    // profilePage: {
    //     posts: Array<PostsType>
    //     newPostText: string
    // },
    // dispatch: (action: ActionsTypes) => void
    profile: ProfileType
}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer
                // store={props.store}
                //               post={props.profilePage.posts}
                //      newPostText={props.profilePage.newPostText}
                // // addPost={props.addPost}
                // // updateNewPostText={props.updateNewPostText}
                //      dispatch={props.dispatch}
            />

        </div>
    )
}

export default Profile