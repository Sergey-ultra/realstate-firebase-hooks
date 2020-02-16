import React from "react";
import Posts from "./posts/Posts";
import S from "./MyPosts.module.css";

const MyPosts = () => {
    return (
        <div>
            <Posts message='Hi!' likesCount='23'/>
            <Posts message='How are you?' likesCount='0'/>
            <Posts message='Yo!' likesCount='21'/>
            <Posts message='Fuck you!' likesCount='8'/>
        </div>
    )
}

export default MyPosts