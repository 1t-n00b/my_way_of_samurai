import React, {ReactNode} from "react";
import {ActionsTypes, RootStateType} from "./redux/store";
import store from "./redux/redux-store";
import {Store, EmptyObject} from "redux";

const StoreContext = React.createContext(store)

type ProviderPropsType = {
    store: Store<EmptyObject & RootStateType, ActionsTypes>
    children?: ReactNode | undefined;
}
export const Provider = (props: ProviderPropsType) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}

export default StoreContext
