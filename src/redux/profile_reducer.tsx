import {PostsType} from "../App";
import {ActionsTypes, AddPostActionType, ChangeNewTextActionType} from "./store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
    posts: [
        {id: 1, message: "how are u", likesCount: 12},
        {id: 2, message: "first post", likesCount: 2}
    ],
    newPostText: "it-dich"
}

const profileReducer = (state = initialState, action: ActionsTypes) => {
    let copyState = {...state};
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 5
            }
            // copyState =
            //     {...state,
            //     posts: [...state.posts, newPost],
            //     newPostText: ""}
             copyState.posts= [...state.posts, newPost]
            //  copyState.posts.push(newPost)
              copyState.newPostText = ""
            break;


        case UPDATE_NEW_POST_TEXT: {
            copyState = {...state}
            copyState.newPostText = action.newText
            break;
        }

    }
    return copyState
}

export const addPostAC = (): AddPostActionType => {
    return {
        type: ADD_POST
    }
}
export const changeNewTextAC = (newText: string): ChangeNewTextActionType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    }
}
export default profileReducer