import {createStore, combineReducers} from "redux";
import profileReducer from "./profile_reducer";
import dialogs_reducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogs_reducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store  = createStore(reducers);

export default store
export type ReduxStoreType = typeof store
// export type ReduxStoreType = ReturnType<typeof reducers>