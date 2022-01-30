import React from "react";
import p from "./Post.module.css"
type PostPropsType = {
    message : string,
    likeCount : number

}

function Post(props : PostPropsType) {
   // console.log(props.message)
    return (

        <div className={p.item}>
            <img src="https://futurecon.live/wp-content/uploads/2021/12/Avatar-2-jfnmQ2r-.jpg" alt=""/>
            {props.message}


            <div>
                <span>Like {props.likeCount}</span>
            </div>
        </div>

    )
}

export default Post