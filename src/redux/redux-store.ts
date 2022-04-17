import {createStore, combineReducers} from "redux";
import profileReducer from "./profile_reducer";
import dialogs_reducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogs_reducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

let store  = createStore(reducers);

export default store
export type ReduxStoreType = typeof store