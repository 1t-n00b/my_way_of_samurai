import React from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from "redux";

type DialogsContainer = {
    // dialogs : Array<DialogType>
    // messages : Array<MessageType>


//    store: ReduxStoreType,
}

// function DialogsContainer(props: DialogsContainer) {
//     // let state = props.store.getState().dialogsPage
//     //
//     // let onSendMessageClick = () => {
//     //     props.store.dispatch(sendMessageAC())
//     // }
//     // let onNewMessageChange = (newMessageBody: string) => {
//     //
//     //     props.store.dispatch(updateNewMessageBodyAC(newMessageBody))
//     // }
//     // return <Dialogs sendMessage={onSendMessageClick}
//     //                 dialogsPage={state}
//     //                 updateNewMessageBody={onNewMessageChange}/>
//
//     return <StoreContext.Consumer>
//         { store =>  {
//             let state = store.getState().dialogsPage
//
//             let onSendMessageClick = () => {
//                 store.dispatch(sendMessageAC())
//             }
//             let onNewMessageChange = (newMessageBody: string) => {
//
//                 store.dispatch(updateNewMessageBodyAC(newMessageBody))
//             }
//
//           return  <Dialogs sendMessage={onSendMessageClick}
//             dialogsPage={state}
//             updateNewMessageBody={onNewMessageChange}/>}
//         }
//     </StoreContext.Consumer>
//
// }

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        // isAuth: state.auth.isAuth
    }
}
// let mapDispatchToProps = (dispatch: (arg0: { type: "UPDATE-NEW-MESSAGE-BODY" | "SEND-MESSAGE"; newMessageBody?: string; }) => void) => {
//     return{
//         updateNewMessageBody: (newMessageBody: string)=> {dispatch(updateNewMessageBodyAC(newMessageBody))},
//         sendMessage: ()=> { dispatch(sendMessageAC())}
//
//     }
// }

// const DialogsContainer = withAuthRedirect( connect(mapStateToProps, {sendMessageAC,updateNewMessageBodyAC})(Dialogs))
// export default  DialogsContainer;

export default compose<React.ComponentType>(
    connect(mapStateToProps, {sendMessageAC,updateNewMessageBodyAC}),
    withAuthRedirect
)(Dialogs)
