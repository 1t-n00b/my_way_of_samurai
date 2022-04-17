import {ActionsTypes, SEND_MESSAGE, UpdateMessageBody} from "./store";
import message from "../components/Dialogs/Message/Message";


const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGES = "SEND-MESSAGE";

let initialState = {
    dialogs: [
        {id: 1, name: "Sergey"},
        {id: 2, name: "Ura"},
        {id: 3, name: "Sanya"},
        {id: 4, name: "Vitalya"},
        {id: 5, name: "Bob"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hello"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"}
    ],
    newMessageBody: "",

}

const dialogsReducer = (state = initialState, action: ActionsTypes) => {
    let newState = {...state, message:[...state.messages]}
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            newState.newMessageBody = action.newMessageBody
            break;
        case SEND_MESSAGES:
            let body = newState.newMessageBody;
            newState.newMessageBody = "";
            newState.messages = [...state.messages,{id: 6, message: body}];
            break;
    }
    return newState
}

export const sendMessageAC = (): SEND_MESSAGE => {
    return {
        type: SEND_MESSAGES
    }
}
export const updateNewMessageBodyAC = (newMessageBody: string): UpdateMessageBody => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newMessageBody: newMessageBody
    }
}

export default dialogsReducer