import React from "react";
import Posts from "./posts/Posts";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Posts message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let newPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div classname={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={newPost}> Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}

            </div>
        </div>
    )
};

export default MyPosts;