import React from "react";
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo//ProfileInfo";
import s from './Profile.module.css';


const Profile = (props) => {

    return (
        <div>
            <div className={s.profile}>
                <ProfileInfo/>
                <MyPosts posts={props.profilePage.posts}
                         newPostText={props.profilePage.newPostText}
                         dispatch={props.dispatch}
                />
            </div>
        </div>
    )
}

export default Profile;