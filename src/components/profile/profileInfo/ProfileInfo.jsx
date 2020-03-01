import React from 'react';
import s from './ProfileInfo.module.css'
import Photo from '../../../assets/images/2185-1268961499zw2b.jpg'
import Preloader from "../../common/preloader/preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={s.profileInfo}
                     src={Photo}/>
            </div>
            <div>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;