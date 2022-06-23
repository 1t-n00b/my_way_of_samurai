import React from "react";
import ProfileInfo from "./MyPosts/Posts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile_reducer";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


type ProfilePropsType = {
    // store: ReduxStoreType,


    // profilePage: {
    //     posts: Array<PostsType>
    //     newPostText: string
    // },
    // dispatch: (action: ActionsTypes) => void
    profile: ProfileType,
    status: string,
    updateStatus: (status: string) => void,
}

function Profile(props: ProfilePropsType) {
    const isAuth = useSelector<AppStateType>(state => state.auth.isAuth);
    if (!isAuth) {
        return <Navigate to="/login"/>;
    }

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
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