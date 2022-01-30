import Dial from "../Dialogs.module.css";
import React from "react";

type MessageType = {
    message: string
}

function Message(props: MessageType) {
    return <div className={Dial.dialog}>{props.message}</div>
}
export default Message