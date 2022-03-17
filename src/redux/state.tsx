import {DialogType, FriendType, MessageType, PostsType} from "../App";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
export type StoreType = {
    _state: RootStateType,
    dispatch: (action: ActionsTypes) => void
    _callSubscriber: (_state: RootStateType) => void
    getState: () => RootStateType
    subscribe: (callback: () => void) => void
}
type AddPostActionType = {
    type: "ADD-POST",
    newPostText: string

}

type ChangeNewTextActionType = {
    type: "UPDATE-NEW-POST-TEXT",
    newText: string,

}

export type ActionsTypes = AddPostActionType | ChangeNewTextActionType

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

        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    firstName: "Ios",
                    secondName: "Githler",
                    ava: "https://topwar.ru/uploads/posts/2018-12/1545760508_1545760524.jpg"
                },
                {
                    id: 2,
                    firstName: "Asic",
                    secondName: "Stalin",
                    ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReK11Sm91LXw7VBMWEVA5_-dCgiU3cDUY9ap0RT5oEvAg0X8nrX_fbSMfON3jaGdKjbW0&usqp=CAU"
                },
                {
                    id: 3,
                    firstName: "Musol",
                    secondName: "Stalin",
                    ava: "https://biographe.ru/wp-content/uploads/2021/10/3423423-2.jpg"
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
        if (action.type === "ADD-POST") {
            let newPost: PostsType = {
                id: 5,
                message: action.newPostText,
                likesCount: 5
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._callSubscriber(this._state)
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }

}

export type RootStateType = {
    profilePage: { posts: Array<PostsType>, newPostText: string }
    dialogsPage: { dialogs: Array<DialogType>, messages: Array<MessageType> }
    sidebar: { friends: Array<FriendType> }
}

export const addPostAC = (newPostText: string): AddPostActionType => {

    return {
        type: ADD_POST,
        newPostText: newPostText
    }
}
export const changeNewTextAC = (newText: string): ChangeNewTextActionType => {

    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText

    }
}

export default store

