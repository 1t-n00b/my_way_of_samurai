import React from "react";
import p from "./MyPosts.module.css"
import Post from "./Posts/Post";

import {PostsType} from "../../../App";
import {ActionsTypes, addPostAC, changeNewTextAC} from "../../../redux/state";

type MyPostsType = {
    post: Array<PostsType>
  //  addPost: (somePost: string) => void
    newPostText: string
   // updateNewPostText: (newText: string) => void
    dispatch:  (action: ActionsTypes)  => void

}

function MyPosts(props: MyPostsType) {

    let postsElement = props.post.map(props => <Post message={props.message} likeCount={props.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        const text = newPostElement.current!.value

      //  props.dispatch({type: "ADD-POST", newPostText: text});
        // props.updateNewPostText('')
        props.dispatch(addPostAC(text))
    }
    const onPostChange = () => {

        let text = newPostElement.current!.value
        props.dispatch(changeNewTextAC(text))

    }

    return (
        <div className={p.post_block}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={p.posts}>
                {postsElement}
                {/* <Post message={posts[0].message } likeCount = {posts[0].likesCount}/>
                <Post message={posts[1].message } likeCount = {posts[1].likesCount}/>*/}

            </div>
        </div>
    )
}

export default MyPosts