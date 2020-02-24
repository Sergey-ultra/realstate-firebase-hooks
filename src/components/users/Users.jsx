import React from "react";
import styles from './users.module.css'

const Users = (props) => {


    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
                    followed: true,
                    fullName: 'Sergey',
                    status: 'Im a boss',
                    location: {city: 'Minsk', country: 'Belorus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
                    followed: false,
                    fullName: 'Kira',
                    status: 'Big deal',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
                    followed: true,
                    fullName: 'Masha',
                    status: 'Im investor',
                    location: {city: 'Kiev', country: 'Ukraine'}
                }
            ]
        )
    }
    ;

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.usersPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}> Unfollow </button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}> Follow </button>
                            }

                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
                    </div>
                )
            }
        </div>
    )
}
export default Users;


