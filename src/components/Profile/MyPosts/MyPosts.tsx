import React from "react";
import p from "./MyPosts.module.css"
import Post from "./Posts/Post";

function MyPosts() {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={p.posts}>
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts