import {UserType} from "./users-reducer";
import {ProfileType} from "./profile_reducer";
import {setIsLoggedInAC} from "./auth-reducer";
import {initializedSuccessAT} from "./app-reducer";
/*import exp from "constants";

export type StoreType = {
    _state: RootStateType,
   // dispatch: (action: ActionsTypes) => void
    // _callSubscriber: (_state: RootStateType) => void
    getState: () => RootStateType
    // subscribe: (callback: () => void) => void
}*/


// export type ProfileType = {
//     aboutMe: string,
//     contacts: {
//         facebook: string,
//         website: string,
//         vk: string,
//         twitter: string,
//         instagram: string,
//         youtube: string,
//         github: string,
//         mainLink: null
//     },
//     lookingForAJob: boolean,
//     lookingForAJobDescription: string,
//     fullName: string,
//     userId: number,
//     photos: {
//         small: string,
//         large: string
//     }
// }
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
export type FollowAT = {
    type: "FOLLOW",
    userID: number
}
export type UnFollowAT = {
    type: "UNFOLLOW",
    userID: number
}
export type Follow_UnFollowAT = {
    type: "FOLLOW/UNFOLLOW",
    userID: number
}
export type SET_USERS_AT = {
    type: "SET-USERS",
    users: UserType[]
}
export type SET_CURRENT_PAGE_AT = {
    type: "SET_CURRENT_PAGE",
    currentPage: number
}
export type SET_TOTAL_COUNT_AT = {
    type: "SET_TOTAL_COUNT",
    totalCount: number
}
export type SET_TOGGLE_IS_FETCHING = {
    type: "TOGGLE_IS_FETCHING",
    isFetching: boolean
}
export type SET_FRIENDS = {
    type: "SET_FRIENDS"
}
export type SET_USER_PROFILE_AT = {
    type: "SET_USER_PROFILE",
    profile: ProfileType
}
export type SET_AUTH_USER_DATA_AT = {
    type: "SET_AUTH_USER_DATA",
    data: {
        id: number,
        email: string,
        login: string,
    }
    isAuth: boolean
}
export type TOGGLE_FOLLOW_UNFOLLOW_AT = {
    type: "TOGGLE_FOLLOW_UNFOLLOW",
    isFetching: boolean,
    userID: number
}
export type SET_STATUS_AT = {
    type: "SET_STATUS",
    status: string,
}

export type ActionsTypes =
    AddPostActionType
    | ChangeNewTextActionType
    | UpdateMessageBody
    |
    SEND_MESSAGE
    | FollowAT
    | UnFollowAT
    | SET_USERS_AT
    | SET_FRIENDS
    | SET_CURRENT_PAGE_AT
    |
    SET_TOTAL_COUNT_AT
    | SET_TOGGLE_IS_FETCHING
    | SET_USER_PROFILE_AT
    | SET_AUTH_USER_DATA_AT
    | Follow_UnFollowAT
    | TOGGLE_FOLLOW_UNFOLLOW_AT
|   SET_STATUS_AT
| ReturnType<typeof setIsLoggedInAC> | initializedSuccessAT
/*
 let store: StoreType = {
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
        usersPage: {
            users: [],
            pageSize: 5,
            totalUsersCount: 0,
            currentPage: 1
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
    // _callSubscriber(_state: RootStateType) {
    // },
    getState() {
        return this._state
    },
    // subscribe(observer: () => void) {
    //     // this._callSubscriber = observer
    // },
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
   // dispatch(action) {
        // this._state.profilePage = profileReducer(this._state.profilePage, action)
        // this._state.dialogsPage = dialogs_reducer(this._state.dialogsPage, action)
        // this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        // this._state.usersPage = usersReducer(this._state.usersPage, action)
        // // if (action.type === ADD_POST) {
        // //     let newPost: PostsType = {
        // //         id: 5,
        // //         message: action.newPostText,
        // //         likesCount: 5
        // //     }
        // //     this._state.profilePage.posts.push(newPost)
        // //     this._state.profilePage.newPostText = ""
        // //     this._callSubscriber(this._state)
        // // } else if (action.type === "UPDATE-NEW-POST-TEXT") {
        // //     this._state.profilePage.newPostText = action.newText
        // //     this._callSubscriber(this._state)
        // // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        // //     this._state.dialogsPage.newMessageBody = action.newMessageBody
        // //     this._callSubscriber(this._state)
        // // } else if (action.type === SEND_MESSAGE) {
        // //     let body = this._state.dialogsPage.newMessageBody;
        // //     this._state.dialogsPage.newMessageBody = "";
        // //     this._state.dialogsPage.messages.push({id: 6, message: body});
        // //     this._callSubscriber(this._state)
        // // }
        // this._callSubscriber(this._state)
    //}

}*/

// export type RootStateType = {
//     profilePage: { posts: Array<PostsType>, newPostText: string, profile: ProfileType }
//     dialogsPage: { dialogs: Array<DialogType>, messages: Array<MessageType>, newMessageBody: string }
//     sidebar: { friends: Array<FriendType> }
//     usersPage: { users: UserType[], pageSize: number, totalUsersCount: number, currentPage: number, isFetching: boolean, followingInProgress: [] }
//     auth: { data: {
//             id: number,
//             email: string,
//             login: string,
//         }
//         isAuth: false
//     }
// }

// export default store

