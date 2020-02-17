import React from "react";
import Posts from "./posts/Posts";
import S from "./MyPosts.module.css";

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'How are you', likesCount: 4},
        {id: 2, message: 'How are you', likesCount: 23},
        {id: 3, message: 'first like', likesCount: 1},
        {id: 4, message: 'Yo', likesCount: 7},
        {id: 5, message: 'Yo', likesCount: 12}
    ]

    let postsElements = posts.map(p => <Posts message={p.message} likesCount={p.likesCount}/>)

    return (
        <div>
            {postsElements}

        </div>
    )
}

export default MyPosts