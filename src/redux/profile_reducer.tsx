import {PostsType} from "../App";
import {ActionsTypes, AddPostActionType, ChangeNewTextActionType} from "./store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
    posts: [
        {id: 1, message: "how are u", likesCount: 12},
        {id: 2, message: "first post", likesCount: 2}

    ],
    newPostText: "it-cAAm"
}

const profileReducer = (state = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case ADD_POST:
            let newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 5
            }
            state.posts.push(newPost)
            state.newPostText = ""
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            break;
    }
    return state
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