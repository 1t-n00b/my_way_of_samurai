import {
    ActionsTypes,
    FollowAT,
    SET_CURRENT_PAGE_AT,
    SET_TOTAL_COUNT_AT,
    SET_USERS_AT,
    SET_TOGGLE_IS_FETCHING,
    UnFollowAT
} from "./store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
// const ADD_POST = "ADD-POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

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
    users: UserType[],
    pageSize: number,
    totalUsersCount: number
    currentPage: number,
    isFetching: boolean
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

    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

const usersReducer = (state = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)
            }
        case  UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING :
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export const follow = (userID: number): FollowAT => ({type: FOLLOW, userID: userID});
export const unfollow = (userID: number): UnFollowAT => ({type: UNFOLLOW, userID});
export const setUsers = (users: UserType[]): SET_USERS_AT => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage: number): SET_CURRENT_PAGE_AT => ({type: "SET_CURRENT_PAGE", currentPage});
export const setTotalCount = (totalCount: number): SET_TOTAL_COUNT_AT => ({type: "SET_TOTAL_COUNT", totalCount});
export const setIsFetching = (isFetching: boolean): SET_TOGGLE_IS_FETCHING => ({type: "TOGGLE_IS_FETCHING", isFetching});

export default usersReducer