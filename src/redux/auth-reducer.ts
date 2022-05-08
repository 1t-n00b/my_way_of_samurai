import {SET_AUTH_USER_DATA_AT} from "./store";

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

export default authReducer