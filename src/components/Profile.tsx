import React from "react";
import p from "./Profile.module.css"

function Profile() {
    return (
        <div className={p.content}>Main content
            <img src="https://cs8.pikabu.ru/post_img/big/2017/12/14/6/151324247811505263.jpg" alt=""/>
            <div>Ava</div>
            <div>Post</div>
            <div className={p.content}>MyPost
                <div className={p.item}>Post1</div>
                <div className={p.item}>Post2</div>
            </div>

        </div>
    )
}

export default Profile