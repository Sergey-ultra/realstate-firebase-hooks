import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.profileInfo}
                     src='https://www.publicdomainpictures.net/pictures/10000/velka/2185-1268961499zw2b.jpg'/>
            </div>
            <div>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;