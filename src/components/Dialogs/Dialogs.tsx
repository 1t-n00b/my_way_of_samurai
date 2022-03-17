import React, {ChangeEvent} from "react";
import Dial from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MessageType} from "../../App";
import {DialogType} from "../../App";
import {ActionsTypes, sendMessageAC, updateNewMessageBodyAC} from "../../redux/state";

type DialogsType = {
    // dialogs : Array<DialogType>
    // messages : Array<MessageType>
    state: {
        dialogs: Array<DialogType>
        messages: Array<MessageType>
        newMessageBody: string
    }

    dispatch: (action: ActionsTypes) => void
}

function Dialogs(props: DialogsType) {
    let dialogsElemetns = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = props.state.newMessageBody

    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessageBody = e.target.value
        props.dispatch(updateNewMessageBodyAC(newMessageBody))
    }
    return (
        <div className={Dial.dialogs}>
            <div className={Dial.dialogs_items}>
                {dialogsElemetns}
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