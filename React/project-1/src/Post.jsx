import React from 'react'
import Like from './Like'
import Comment from './Comment'

function Post(props) {
    console.log(props);
    return (
        <div>
            <h1>Post {props.number}</h1>
            <p>
                {props.name} visited my channel!!!
            </p>
            <span>
                <Like /> <Comment />
            </span>
        </div>
    )
}

export default Post