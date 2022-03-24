import React, {ChangeEvent} from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {ReduxStoreType} from "../../redux/redux-store";
import StoreContext from "../../StoreContext";

type DialogsContainer = {
    // dialogs : Array<DialogType>
    // messages : Array<MessageType>


//    store: ReduxStoreType,
}

function DialogsContainer(props: DialogsContainer) {
    // let state = props.store.getState().dialogsPage
    //
    // let onSendMessageClick = () => {
    //     props.store.dispatch(sendMessageAC())
    // }
    // let onNewMessageChange = (newMessageBody: string) => {
    //
    //     props.store.dispatch(updateNewMessageBodyAC(newMessageBody))
    // }
    // return <Dialogs sendMessage={onSendMessageClick}
    //                 dialogsPage={state}
    //                 updateNewMessageBody={onNewMessageChange}/>


    return <StoreContext.Consumer>
        { store =>  {
            let state = store.getState().dialogsPage

            let onSendMessageClick = () => {
                store.dispatch(sendMessageAC())
            }
            let onNewMessageChange = (newMessageBody: string) => {

                store.dispatch(updateNewMessageBodyAC(newMessageBody))
            }

          return  <Dialogs sendMessage={onSendMessageClick}
            dialogsPage={state}
            updateNewMessageBody={onNewMessageChange}/>}
        }
    </StoreContext.Consumer>

}

export default DialogsContainer;