import {ActionsTypes, SEND_MESSAGE, UpdateMessageBody} from "./state";
import {DialogType, MessageType} from "../App";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND_MESSAGE";
const dialogsReducer = (state: { dialogs: Array<DialogType>, messages: Array<MessageType>, newMessageBody: string }, action: ActionsTypes) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessageBody
            break;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: 6, message: body});
            break;
    }
    return state
}

export const sendMessageAC = (): SEND_MESSAGE => {
    return {
        type: SEND_MESSAGE

    }
}
export const updateNewMessageBodyAC = (newMessageBody: string): UpdateMessageBody => {

    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newMessageBody: newMessageBody

    }
}

export default dialogsReducer