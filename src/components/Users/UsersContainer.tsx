import {connect} from "react-redux";
import {
    acceptFollow,
    acceptUnfollow,
    getUsers,
    setCurrentPage,
    setIsFetching,
    setUsers,
    toggleFollowingProgress,
} from "../../redux/users-reducer";

import UsersClassComponent from "./UsersClassComponent";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
// const mapDispatchToProps = (dispatch: (arg0: { type: string; userID?: number; users?: UserType[]; }) => void) => {
//     return {
//         follow: (userID: number) => {
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID: number) => {
//             dispatch(unfollowAC(userID))
//         },
//         setUsers: (users: UserType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setSetTotalCount: (totalCount: number) => {
//             dispatch(setTotalCountAC(totalCount))
//         },
//         setIsFetching: (isFetching: boolean) => {
//             dispatch(setIsFetchingAC(isFetching))
//         }
//
//     }
// }


// export default connect(mapStateToProps, {
//     setUsers,
//     setCurrentPage,
//     setIsFetching,
//     toggleFollowingProgress,
//     getUsers,
//     acceptFollow,
//     acceptUnfollow
// })(UsersClassComponent);

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
    setUsers,
    setCurrentPage,
    setIsFetching,
    toggleFollowingProgress,
    getUsers,
    acceptFollow,
    acceptUnfollow
}))(UsersClassComponent)