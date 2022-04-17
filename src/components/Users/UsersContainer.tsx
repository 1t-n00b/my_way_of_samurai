import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {RootStateType} from "../../redux/store";

const mapStateToProps = (state:RootStateType) => {
        return {
            users: state.usersPage.users
        }
}
 const mapDispatchToProps = (dispatch: (arg0: { type: string; userID?: number; users?: UserType[]; }) => void) => {
        return{
            follow: (userID: number) => {
                dispatch(followAC(userID))
            },
            unfollow: (userID: number) => {
                dispatch(unfollowAC(userID))
            },
            setUsers: (users:UserType[]) => {
                dispatch(setUsersAC(users))
            }
        }
 }


export default connect(mapStateToProps, mapDispatchToProps)(Users);