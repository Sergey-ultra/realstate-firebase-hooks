import React from 'react';
import s from './ProfileInfo.module.css'
import Photo from '../../../assets/images/2185-1268961499zw2b.jpg'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.profileInfo}
                     src={Photo}/>
            </div>
            <div>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;