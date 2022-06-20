import {ActionsTypes, AddPostActionType, ChangeNewTextActionType, SET_STATUS_AT, SET_USER_PROFILE_AT} from "./store";
import {Dispatch} from "react";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

export type ProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}

type ProfileStateType = {
    profile:   ProfileType | null;
    newPostText: string ;
    posts:  Array<PostsType>,
    status: string,
}
const initialState: ProfileStateType = {
    profile: null ,
    newPostText: "it-dich",
    posts: [
        {id: 1, message: "how are u", likesCount: 12},
        {id: 2, message: "first post", likesCount: 2}
    ],
    status:"",

}
//   { posts: Array<PostsType>, newPostText: string, profile: ProfileType }

const profileReducer = (state = initialState, action: ActionsTypes): ProfileStateType => {
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
            copyState.posts = [...state.posts, newPost]
            //  copyState.posts.push(newPost)
            copyState.newPostText = ""
            break;


        case UPDATE_NEW_POST_TEXT: {
            copyState = {...state}
            copyState.newPostText = action.newText
            break;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS : {
            return {...state, status: action.status}
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

export const setUserProfile = (profile: ProfileType): SET_USER_PROFILE_AT => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const setStatusAC = (status: string): SET_STATUS_AT => {
    return {
        type: SET_STATUS,
        status
    }
}
export const getUserProfile = (userID: number) => (dispatch: Dispatch<ActionsTypes>) => {
    return usersAPI.getProfile(userID)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export const getStatus = (userID: number) => (dispatch: Dispatch<ActionsTypes>) => {
    return profileAPI.getStatus(userID)
        .then(response => {
            dispatch(setStatusAC(response.data))
        })
}
export const updateStatus = (status: string) => (dispatch: Dispatch<ActionsTypes>) => {
    return profileAPI.updateStatus(status)
        .then(response => {
           if (response.data.resultCode===0) {
               dispatch(setStatusAC(response.data))
           }
        })
}
export default profileReducer