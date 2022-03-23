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
            <img src="https://cdn.shazoo.ru/428849_h94MXfiS7b_impressiveunitedharrier_size_res.gif" alt=""/>
            <div>{props.message}</div>


            <div>
                <span>Like {props.likeCount}</span>
            </div>
        </div>

    )
}

export default Post