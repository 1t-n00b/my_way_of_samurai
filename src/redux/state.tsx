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


// export type stateType = {
//     profilePage : {
//         posts: Array<PostsType>
//     }
//     messagesPage : {
//         dialogs: Array<DialogType>,
//         messages: Array<MessageType>,
//     }
// }
import {DialogType, FriendType, MessageType, PostsType} from "../App";


let renderedPage: (state: RootStateType) => void = () => {

}

export type RootStateType = {
    profilePage: { posts: Array<PostsType>, newPostText: string }
    dialogsPage: { dialogs: Array<DialogType>, messages: Array<MessageType> }
    sidebar: { friends: Array<FriendType> }
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'how are u', likesCount: 12},
            {id: 2, message: 'first post', likesCount: 2}

        ],
        newPostText: "it-cAAm"
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Sergey'},
            {id: 2, name: 'Ura'},
            {id: 3, name: 'Sanya'},
            {id: 4, name: 'Vitalya'},
            {id: 5, name: 'Bob'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
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


}

export const addPost = () => {
    let newPost: PostsType = {id: 5, message: state.profilePage.newPostText, likesCount: 5}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    renderedPage(state)

}

export const updateNewPostText = (newText: string) => {

    state.profilePage.newPostText = newText

    renderedPage(state)

}

export const subscribe = (observer: (state: RootStateType) => void) => {
    renderedPage = observer
}

export default state