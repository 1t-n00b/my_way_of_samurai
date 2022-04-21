import React from "react";
import {UserType} from "../../redux/users-reducer";
import s from "./Users.module.css"
import axios from "axios";
// import {UsersPropsType} from "./Users";

type UsersPropsType = {
    users: UserType[],
    follow: (userID: number) => void,
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    setCurrentPage: (currentPage: number) => void
    setSetTotalCount:(totalCount: number) => void
}

class UsersClassComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
            this.props.setUsers(response.data.items)
            this.props.setSetTotalCount(response.data.totalCount)
        })
    }

    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //             this.props.setUsers(response.data.items)
    //         })
    //     }
    // }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = []

        for (let i = 1; i <= 5; i++) {
            pages.push(i)
        }
        return <div>

            <div className={s.navigatorPage}>
                {pages.map(p => {
                    return <span onClick={() => {
                        this.onPageChanged(p)
                    }} className={this.props.currentPage === p ? s.selectedPage : ""}>{p}</span>
                })}
                <span> ...</span>
                <input type={"number"} value={this.props.currentPage}
                       onChange={(e)=>this.onPageChanged(+e.currentTarget.value)} />
                <div>{pagesCount}</div>
            </div>
            {/*<button onClick={this.getUsers}>Get Users</button>*/}
            {this.props.users.map(u => <div key={u.id}>

                <div className={s.user_info}>
                    <div className={s.left_part}>
                        <div className={s.user_photo}>

                            <img src={u.photos.small} alt=""/>
                        </div>
                        {/*    <div className={s.btn}>{u.followed ?
                            <button className={u.followed? s.active: ""} onClick={() => props.unfollow(u.id)}>FOLLOW</button> :
                            <button className={u.followed? `s.active` : ""} onClick={() => props.follow(u.id)}>UNFOLLOW</button>}
                        </div>*/}
                        <div className={s.btn}>
                            <button className={u.followed ? s.active : ""}
                                    onClick={() => this.props.follow(u.id)}>{u.followed ? "FOLLOW" : "UNFOLLOW"}</button>
                        </div>
                    </div>
                    <div className={s.right_part}>
                        <div className={s.person_info}>
                            <div className={s.fullName}>{u.name}</div>
                            {/*<div className={s.status}>{u.status}</div>*/}
                        </div>

                        <div className={s.location}>
                            {/*<div className={s.city}>{u.status}</div>*/}
                            <div className={s.country}>{u.status}</div>
                        </div>
                    </div>
                </div>


            </div>)}
        </div>
    }
}

export default UsersClassComponent;