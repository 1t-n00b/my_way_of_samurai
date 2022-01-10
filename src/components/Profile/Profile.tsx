import React from "react";
import p from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div className={p.content}>
           <div>
               <img src="https://cs8.pikabu.ru/post_img/big/2017/12/14/6/151324247811505263.jpg" alt=""/>
           </div>
            <div>
                Ava + description
            </div>
            <MyPosts/>

        </div>
    )
}

export default Profile