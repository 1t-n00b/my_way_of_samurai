import React from "react";
import s from "./NavBar.module.css"
import {NavLink} from "react-router-dom";
import FriendsContainer from "./FriendsContainer";

// type NavBarPropsType = {
//     state: {
//         friends: FriendType[]
//     }
// }

function NavBar() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                {/*<NavLink to={"/profiles"} >Profile</NavLink>*/}
                <NavLink className={navData => navData.isActive ? s.activeLink : s.item}
                         to="/profile/*">Profile</NavLink>
            </div>

            <div className={`${s.item} ${s.active}`}>
                {/*<NavLink to={"/dialogs"}>Messages</NavLink>*/}
                <NavLink className={navData => navData.isActive ? s.activeLink : s.item}
                         to="/dialogs">Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                {/*<NavLink to={"/dialogs"}>Messages</NavLink>*/}
                <NavLink className={navData => navData.isActive ? s.activeLink : s.item}
                         to="/users">Users</NavLink>
            </div>
            <div className={s.item}>
                <a>News</a></div>
            <div className={s.item}><a>Music</a></div>
            <div className={s.item}><a>Settings</a></div>



            <div className={s.friends_block}>
                <h3 className={s.item}><a>Friends</a></h3>
                <FriendsContainer/>
                {/*<div className={s.friends}>{props.state.friends.map(f =>*/}
                {/*    <Friend firstName={f.firstName}*/}
                {/*                                                                 secondName={f.secondName}*/}
                {/*                                                                 id={f.id} ava={f.ava}/>)}*/}


                {/*</div>*/}


            </div>


        </nav>
    )
}

export default NavBar;