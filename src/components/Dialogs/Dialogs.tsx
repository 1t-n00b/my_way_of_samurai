import React from "react";
import Dial from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MessageType} from "../../App";
import {DialogType} from "../../App";

type DialogsType = {
    // dialogs : Array<DialogType>
    // messages : Array<MessageType>
    state: {
        dialogs: Array<DialogType>
        messages: Array<MessageType>
    }
}

function Dialogs(props: DialogsType) {
    let dialogsElemetns = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);
    return (
        <div className={Dial.dialogs}>
            <div className={Dial.dialogs_items}>
                {dialogsElemetns}
            </div>
            <div className={Dial.messages}>
                {messagesElements}


            </div>
        </div>
    )
}

export default Dialogs;