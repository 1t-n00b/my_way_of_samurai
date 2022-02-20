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
            <img src="https://i.gifer.com/origin/81/8150b6cfc8b1d30c274747580ef161f2_w200.gif" alt=""/>
            <div>{props.message}</div>


            <div>
                <span>Like {props.likeCount}</span>
            </div>
        </div>

    )
}

export default Post