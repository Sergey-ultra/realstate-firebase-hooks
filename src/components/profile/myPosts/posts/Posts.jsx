import React from "react";
import s from './Posts.module.css'

const Posts = (props) => {
    return (
        <div className={s.item}>
            <img src='http://www.nokiaplanet.com/uploads/posts/2015-01/1421138632_frozen-480x800.jpg '/>
            {props.message}
            <div>
                            <span>
                            like {props.likesCount}
                            </span>
            </div>
        </div>

    )
}

export default Posts;