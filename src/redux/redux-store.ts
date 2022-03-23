import {createStore, combineReducers} from "redux";
import profileReducer from "./profile_reducer";
import dialogs_reducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogs_reducer,
    sidebar: sidebarReducer
})

let store = createStore(reducers);

export default store
export type ReduxStoreType = typeof store