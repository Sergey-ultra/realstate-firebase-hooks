import React from "react";
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo//ProfileInfo";
import s from './Profile.module.css';


const Profile = (props) => {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}/>
        </div>
    )
}

export default Profile;