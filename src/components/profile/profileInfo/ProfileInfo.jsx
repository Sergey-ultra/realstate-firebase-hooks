import React from 'react';
import s from './ProfileInfo.module.css'
import Photo from '../../../assets/images/2185-1268961499zw2b.jpg'
import Preloader from "../../common/preloader/preloader";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status ={props.status}/>
            </div>
        </div>
    )
}
export default ProfileInfo;