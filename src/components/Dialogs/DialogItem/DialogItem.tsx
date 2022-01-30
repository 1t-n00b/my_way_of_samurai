import Dial from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


type DialogItemType = {
    name: string;
    id: number
}
function DialogItem(props: DialogItemType) {
    let path = "/dialogs/" + props.id
    return <div className={Dial.dialog + ' ' + Dial.active}>
        <NavLink to={path}>{props.name}</NavLink>
        {/*<NavLink className={navData => navData.isActive ? Dial.activeLink : Dial.item} to={path}>{props.name}</NavLink>*/}

    </div>
}
export default DialogItem
