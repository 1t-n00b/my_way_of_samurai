import React from "react";
import store from "./redux/redux-store";
import {StoreType} from "./redux/store";

const StoreContext = React.createContext(store )

type ProviderPropsType ={
    store: StoreType
}
// const Provider = (props: ProviderPropsType) => {
//   return <StoreContext.Provider value={props.store}>
//       {props.children}
//   </StoreContext.Provider>
// }


export default StoreContext
