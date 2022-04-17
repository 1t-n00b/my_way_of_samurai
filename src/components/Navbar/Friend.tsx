import React from 'react';
import s from "./NavBar.module.css"
import {FriendType} from "../../App";
type FriendPropsType = {
    firstName: string
    secondName:string
    id: number
    ava :string
    // friends:FriendType[]
}

const Friend = (props: FriendPropsType) => {
    return (
        <div className={s.friend}>
            <img src={props.ava} alt=""/>
            <h3>{props.firstName}</h3>
        </div>

        // <div>
        //     {props.friends.map(f=> <div className={s.friend}>
        //         <img src={f.ava} alt=""/>
        //         <h3>{f.firstName}</h3>
        //     </div>)}
        // </div>

    );
};

export default Friend;