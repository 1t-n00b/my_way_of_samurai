import {ActionsTypes, SET_AUTH_USER_DATA_AT} from "./store";
import {authAPI} from "../api/api";
import {Dispatch} from "react";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

type AuthStateType = {
    data: {
        id: number | null,
        email: string,
        login: string | null,
    },
    isAuth: boolean,
}
const initialState: AuthStateType = {
    data: {
        id: null,
        email: '',
        login: null,
    },
    isAuth: false
}

const authReducer = (state = initialState, action: ActionsTypes): AuthStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                data: {...action.data},
                isAuth: action.isAuth
            }
        }
        case "login/SET-IS-LOGGED-IN": {
            return {...state, isAuth: action.value}
        }

        default :
            return state
    }
}

export const setAuthUserDataAC = (id: number, email: string, login: string, isAuth: boolean): SET_AUTH_USER_DATA_AT => {
    return {
        type: SET_AUTH_USER_DATA,
        data: {
            id, email, login
        },
        isAuth
    }
}

export const getAuthUserData = () => (dispatch: Dispatch<ActionsTypes>) => {
    return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserDataAC(id, email, login, true))
            }
        })
}


export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const);

export const loginTC = (data: any) => (dispatch: Dispatch<ActionsTypes>) => {

    authAPI.login(data).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setIsLoggedInAC(true))
            //dispatch(setAuthUserDataAC(res.data.id, data.email, data.login))
            //@ts-ignore
            dispatch(getAuthUserData())
        }
    })

};

export const logoutTC = () => (dispatch: Dispatch<ActionsTypes>) => {
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(false))
            }
        })

}


export default authReducer