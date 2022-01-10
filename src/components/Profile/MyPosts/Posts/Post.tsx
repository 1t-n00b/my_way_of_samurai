import React from "react";
import p from "./Post.module.css"

function Post() {
    return (

        <div className={p.item}>
            <img src="https://futurecon.live/wp-content/uploads/2021/12/Avatar-2-jfnmQ2r-.jpg" alt=""/>
            Post1
            <span>Like</span>
            <div>
                <span>Like</span>
            </div>
        </div>

    )
}

export default Post