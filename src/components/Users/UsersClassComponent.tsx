import React from "react";
import {UserType} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


type UsersPropsType = {
    users: UserType[],

    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    setCurrentPage: (currentPage: number) => void
    isFetching: boolean,
    followingInProgress: Array<number>
    toggleFollowingProgress: (isFetching: boolean, userID: number) => void
    getUsers: (currentPage: number, pageSize: number) => void,
    acceptFollow: (userID: number)=> void
    acceptUnfollow: (userID: number)=> void
}

class UsersClassComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }


    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <div className={"users_preloader"}>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                // follow={this.props.follow}
                // unfollow={this.props.unfollow}

                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
                   acceptFollow={this.props.acceptFollow}
                   acceptUnfollow={this.props.acceptUnfollow}


            />
        </div>
        // let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        // let pages = []
        //
        // for (let i = 1; i <= 5; i++) {
        //     pages.push(i)
        // }
        // return <div>
        //
        //     <div className={s.navigatorPage}>
        //         {pages.map(p => {
        //             return <span onClick={() => {
        //                 this.onPageChanged(p)
        //             }} className={this.props.currentPage === p ? s.selectedPage : ""}>{p}</span>
        //         })}
        //         <span> ...</span>
        //         <input type={"number"} value={this.props.currentPage}
        //                onChange={(e)=>this.onPageChanged(+e.currentTarget.value)} />
        //         <div>{pagesCount}</div>
        //     </div>
        //     {/*<button onClick={this.getUsers}>Get Users</button>*/}
        //     {this.props.users.map(u => <div key={u.id}>
        //
        //         <div className={s.user_info}>
        //             <div className={s.left_part}>
        //                 <div className={s.user_photo}>
        //
        //                     <img src={u.photos.small} alt=""/>
        //                 </div>
        //                 {/*    <div className={s.btn}>{u.followed ?
        //                     <button className={u.followed? s.active: ""} onClick={() => props.unfollow(u.id)}>FOLLOW</button> :
        //                     <button className={u.followed? `s.active` : ""} onClick={() => props.follow(u.id)}>UNFOLLOW</button>}
        //                 </div>*/}
        //                 <div className={s.btn}>
        //                     <button className={u.followed ? s.active : ""}
        //                             onClick={() => this.props.follow(u.id)}>{u.followed ? "FOLLOW" : "UNFOLLOW"}</button>
        //                 </div>
        //             </div>
        //             <div className={s.right_part}>
        //                 <div className={s.person_info}>
        //                     <div className={s.fullName}>{u.name}</div>
        //                     {/*<div className={s.status}>{u.status}</div>*/}
        //                 </div>
        //
        //                 <div className={s.location}>
        //                     {/*<div className={s.city}>{u.status}</div>*/}
        //                     <div className={s.country}>{u.status}</div>
        //                 </div>
        //             </div>
        //         </div>
        //
        //
        //     </div>)}
        // </div>
    }
}

export default UsersClassComponent;