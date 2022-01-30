import React from "react";
import s from "./NavBar.module.css"
import {NavLink} from "react-router-dom";

function NavBar() {
return (
    <nav className={s.nav}>
        <div className={s.item}>
                {/*<NavLink to={"/profiles"} >Profile</NavLink>*/}
                <NavLink className={navData => navData.isActive ? s.activeLink:s.item} to="/profiles">Profile</NavLink>
        </div>

        <div className={`${s.item} ${s.active}`}>
                {/*<NavLink to={"/dialogs"}>Messages</NavLink>*/}
                <NavLink className={navData => navData.isActive ? s.activeLink:s.item} to="/dialogs">Messages</NavLink>
        </div>
        <div className={s.item}>
                <a>News</a></div>
        <div className={s.item}><a>Music</a></div>
        <div className={s.item}><a>Settings</a></div>
    </nav>
)
}
export default NavBar;