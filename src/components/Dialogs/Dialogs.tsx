import React, {ChangeEvent} from "react";
import Dial from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogType, MessageType} from "../../redux/dialogs_reducer";

type DialogsType = {
    dialogsPage: { dialogs: Array<DialogType>, messages: Array<MessageType>, newMessageBody: string }
    sendMessageAC: () => void
    updateNewMessageBodyAC: (newMessageBody: string) => void
    isAuth: boolean
}

function Dialogs(props: DialogsType) {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessageAC()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessageBody = e.target.value
        props.updateNewMessageBodyAC(newMessageBody);
    }

    // if (!props.isAuth) return <Navigate to="/login"/>
    return (
        <div className={Dial.dialogs}>
            <div className={Dial.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={Dial.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} placeholder="enter your message"
                                   onChange={onNewMessageChange}> </textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;