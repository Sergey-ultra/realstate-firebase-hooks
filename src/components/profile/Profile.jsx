import React from "react";

import s from './Profile.module.css';
import MyPostsContainer from "./myPosts/MyPostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";


const Profile = (props) => {

    return (
        <div>
            <div className={s.profile}>
                <ProfileInfo profile={props.profile}  status = {props.status} updateStatus = {props.updateStatus}/>
                <MyPostsContainer/>
            </div>
        </div>
    )
}

export default Profile;