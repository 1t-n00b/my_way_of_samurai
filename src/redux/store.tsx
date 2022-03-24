import {DialogType, FriendType, MessageType, PostsType} from "../App";
import profileReducer from "./profile_reducer";
import dialogs_reducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";

export type StoreType = {
    _state: RootStateType,
    dispatch: (action: ActionsTypes) => void
    _callSubscriber: (_state: RootStateType) => void
    getState: () => RootStateType
    subscribe: (callback: () => void) => void
}
export type AddPostActionType = {
    type: "ADD-POST",

}
export type UpdateMessageBody = {
    type: "UPDATE-NEW-MESSAGE-BODY",
    newMessageBody: string

}

export type ChangeNewTextActionType = {
    type: "UPDATE-NEW-POST-TEXT",
    newText: string,

}

export type SEND_MESSAGE = {
    type: "SEND-MESSAGE",
}

export type ActionsTypes = AddPostActionType | ChangeNewTextActionType | UpdateMessageBody | SEND_MESSAGE

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "how are u", likesCount: 12},
                {id: 2, message: "first post", likesCount: 2}

            ],
            newPostText: "it-cAAm"
        },
        dialogsPage: {
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

        },

        sidebar: {
            friends: [
                {
                    id: 1,
                    firstName: "Ilona",
                    secondName: "Mask",
                    ava: "https://avatars.mds.yandex.net/get-zen_doc/1671806/pub_5e422bfaabb5074fff3a4747_5e422c255e0d7416b977d7a7/scale_1200"
                },
                {
                    id: 2,
                    firstName: "Pashtet",
                    secondName: "Durov",
                    ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqGN0cnVY_Af9mV4l1vI6kmjnCBlho78TMuA&usqp=CAU"
                },
                {
                    id: 3,
                    firstName: "Cuker",
                    secondName: "Cuker",
                    ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwvFENTFoaxFujBsq6O0DV9jIas_oPSTcgZ-wM601oc1ufBiVfp5o5G_WdQ0LbsBOloJY&usqp=CAU"
                }
            ]
        }

    },
    _callSubscriber(_state: RootStateType) {
    },

    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },

    // addPost() {
    //     let newPost: PostsType = {id: 5, message: this._state.profilePage.newPostText, likesCount: 5}
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._callSubscriber(this._state)
    // },
    // updateNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = newText
    //     this._callSubscriber(this._state)
    //
    // },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogs_reducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        // if (action.type === ADD_POST) {
        //     let newPost: PostsType = {
        //         id: 5,
        //         message: action.newPostText,
        //         likesCount: 5
        //     }
        //     this._state.profilePage.posts.push(newPost)
        //     this._state.profilePage.newPostText = ""
        //     this._callSubscriber(this._state)
        // } else if (action.type === "UPDATE-NEW-POST-TEXT") {
        //     this._state.profilePage.newPostText = action.newText
        //     this._callSubscriber(this._state)
        // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        //     this._state.dialogsPage.newMessageBody = action.newMessageBody
        //     this._callSubscriber(this._state)
        // } else if (action.type === SEND_MESSAGE) {
        //     let body = this._state.dialogsPage.newMessageBody;
        //     this._state.dialogsPage.newMessageBody = "";
        //     this._state.dialogsPage.messages.push({id: 6, message: body});
        //     this._callSubscriber(this._state)
        // }
        this._callSubscriber(this._state)
    }

}

export type RootStateType = {
    profilePage: { posts: Array<PostsType>, newPostText: string }
    dialogsPage: { dialogs: Array<DialogType>, messages: Array<MessageType>, newMessageBody: string }
    sidebar: { friends: Array<FriendType> }
}

export default store
