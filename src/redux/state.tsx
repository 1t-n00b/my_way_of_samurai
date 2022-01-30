// export let posts = [
//     {id: 1, message: 'how are u', likesCount: 12},
//     {id: 2, message: 'first post', likesCount: 2}
//
// ]
//
// export let dialogs = [
//     {id: 1, name: 'Sergey'},
//     {id: 2, name: 'Ura'},
//     {id: 3, name: 'Sanya'},
//     {id: 4, name: 'Vitalya'},
//     {id: 5, name: 'Bob'}
// ];
// export let messages = [
//     {id: 1, message: 'Hi'},
//     {id: 2, message: 'Hello'},
//     {id: 3, message: 'Yo'},
//     {id: 4, message: 'Yo'},
//     {id: 5, message: 'Yo'}
// ]

import {DialogType, MessageType, PostsType} from "../App";

// export type stateType = {
//     profilePage : {
//         posts: Array<PostsType>
//     }
//     messagesPage : {
//         dialogs: Array<DialogType>,
//         messages: Array<MessageType>,
//     }
// }
let state   = {
    profilePage : {
        posts : [
            {id: 1, message: 'how are u', likesCount: 12},
            {id: 2, message: 'first post', likesCount: 2}

        ]
    },
    dialogsPage : {
        dialogs: [
            {id: 1, name: 'Sergey'},
            {id: 2, name: 'Ura'},
            {id: 3, name: 'Sanya'},
            {id: 4, name: 'Vitalya'},
            {id: 5, name: 'Bob'}
        ],
        messages : [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ],
    }




}
export default state