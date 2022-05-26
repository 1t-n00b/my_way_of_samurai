import React from "react";
import {addPostAC, changeNewTextAC} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AddPostActionType, ChangeNewTextActionType} from "../../../redux/store";
import {AppStateType} from "../../../redux/redux-store";

type MyPostsContainer = {
    // store: ReduxStoreType,

    // post: Array<PostsType>
    // addPost: (somePost: string) => void
    // newPostText: string
    // updateNewPostText: (newText: string) => void
    // dispatch: (action: ActionsTypes) => void

}

// function MyPostsContainer(props: MyPostsContainer) {
//
//     // let state = props.store.getState()
//
//     // const addPost = () => {
//     //     props.store.dispatch(addPostAC())
//     // }
//     // const onPostChange = (text: string) => {
//     //     let action = changeNewTextAC(text)
//     //     props.store.dispatch(action)
//     //
//     // }
//
//     return <StoreContext.Consumer>
//         {store => {
//             let state = store.getState()
//             const addPost = () => {
//                 store.dispatch(addPostAC())
//             }
//             const onPostChange = (text: string) => {
//                 let action = changeNewTextAC(text)
//                 store.dispatch(action)
//             }
//             return <MyPosts updateNewPostText={onPostChange}
//                             addPost={addPost}
//                             post={state.profilePage.posts}
//                 // post={state.profilePage.posts}
//                             newPostText={state.profilePage.newPostText}
//                 // newPostText={state.profilePage.newPostText}
//                 // dispatch={props.dispatch}
//             />
//
//         }
//
//         }
//
//     </StoreContext.Consumer>
//
// }

let mapStateToProps = (state: AppStateType) => {
    return {
        post: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: (arg0: ChangeNewTextActionType | AddPostActionType) => any)  => {
    return {
        addPost:()=> dispatch(addPostAC()),
        updateNewPostText: (text:string)=> {
            let action = changeNewTextAC(text);
           dispatch(action)
        }

    }
}


const MypostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MypostContainer