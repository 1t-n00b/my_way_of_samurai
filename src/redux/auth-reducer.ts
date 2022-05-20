import {ActionsTypes, SET_AUTH_USER_DATA_AT} from "./store";
import {authAPI} from "../api/api";
import {Dispatch} from "react";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";


const initialState = {
    data: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false
}

const authReducer = (state = initialState, action: SET_AUTH_USER_DATA_AT) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                data: {...action.data},
                isAuth: true
            }
        }
        default :
            return state
    }
}

export const setAuthUserDataAC = (id: number, email: string, login: string): SET_AUTH_USER_DATA_AT => {
    return {
        type: SET_AUTH_USER_DATA,
        data: {
            id, email, login
        },
        isAuth: false
    }
}

export const getAuthUserData = () => (dispatch: Dispatch<ActionsTypes>)=> {
    return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
               dispatch(setAuthUserDataAC(id, email, login))
            }
        })
}


export default authReducer