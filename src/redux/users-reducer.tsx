import {ActionsTypes, FollowAT, SET_USERS_AT, UnFollowAT} from "./store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"

// const ADD_POST = "ADD-POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USERS = "SET-USERS";

export type UserType = {
    // id: number,
    // followed: boolean
    // fullName: string,
    // status: string,
    // location: {
    //     city: string,
    //     country: string
    // }
    name: string,
    id: number,
    uniqueUrlName: string,
    photos: {
        small: string,
        large: string
    },
    status: string,
    followed: boolean
}

export type UserSateType = {
    users: UserType[]
};

const initialState: UserSateType = {
    users: [
        // {id: 1, followed: true, fullName: "Dmitriy", status: "Boss", location: {city: "Minsk", country: "Belarus"}},
        // {id: 2, followed: false, fullName: "Valera", status: "Manager", location: {city: "Kiev", country: "Ukraine"}},
        // {
        //     id: 3,
        //     followed: true,
        //     fullName: "Julia",
        //     status: "Director",
        //     location: {city: "Melitopol", country: "Ukraine"}
        // },
        // {id: 4, followed: true, fullName: "Svetlana", status: "Whore", location: {city: "Moscow", country: "Russia"}},
    ]
}

const usersReducer = (state = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: !u.followed} : u)
            }
        case  UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action?.users]}
        default:
            return state
    }
}

export const followAC = (userID: number):FollowAT => ({type: FOLLOW, userID:userID});
export const unfollowAC = (userID: number):UnFollowAT => ({type: UNFOLLOW, userID});
export const setUsersAC = (users: UserType[]): SET_USERS_AT => ({type: SET_USERS, users});

export default usersReducer