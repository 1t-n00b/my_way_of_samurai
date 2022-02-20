import React from 'react';
import s from "./NavBar.module.css"
type FriendPropsType = {
    firstName: string
    secondName:string
    id: number
    ava :string
}

const Friend = (props: FriendPropsType) => {
    return (
        <div className={s.friend}>
            <img src={props.ava} alt=""/>
            <h3>{props.firstName}</h3>
        </div>
    );
};

export default Friend;