import React from "react";
import ProfileInfo from "./profileInfo//ProfileInfo";
import s from './Profile.module.css';
import MyPostsContainer from "./myPosts/MyPostsContainer";


const Profile = (props) => {

    return (
        <div>
            <div className={s.profile}>
                <ProfileInfo/>
                <MyPostsContainer/>
            </div>
        </div>
    )
}

export default Profile;