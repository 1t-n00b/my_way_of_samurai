import React from "react";
import ProfileInfo from "./MyPosts/Posts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ReduxStoreType} from "../../redux/redux-store";

type ProfileType = {
    // store: ReduxStoreType,


    // profilePage: {
    //     posts: Array<PostsType>
    //     newPostText: string
    // },
    // dispatch: (action: ActionsTypes) => void
}

function Profile(props: ProfileType) {

    return (
        <div>
            <ProfileInfo/>
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