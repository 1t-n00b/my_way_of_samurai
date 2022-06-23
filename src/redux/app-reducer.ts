import {ActionsTypes} from "./store";
import {getAuthUserData} from "./auth-reducer";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";


type AppInitStateType = {
    initialized: boolean
}
const initialState: AppInitStateType = {
    initialized: false
}

export const appReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "initializedSuccessAC": {
            return {...state, initialized: true}
        }
        default : {
            return state
        }
    }
}

type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionsTypes>

export const initializedApp = () => (dispatch:ThunkDispatchType) => {
    const promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(initializedSuccessAC())
    })

};
export const initializedSuccessAC = (): initializedSuccessAT => ({type: "initializedSuccessAC"})

export type initializedSuccessAT = {
    type: "initializedSuccessAC"
}