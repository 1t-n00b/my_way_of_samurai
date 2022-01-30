import React from "react";
import s from './ProfileInfo.module.css'
function ProfileInfo() {
    return (
        <div >
            <div>
                <img src="https://cs8.pikabu.ru/post_img/big/2017/12/14/6/151324247811505263.jpg" alt=""/>
            </div>
            <div className={s.description_block}>
                Ava + description
            </div>
        </div>
    )
}
export default ProfileInfo