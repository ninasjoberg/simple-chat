import React from 'react';


export default function Message(props) {
    const { text, userId, username } = props.value;

    return(
        <div className="message">
            <li>
                <div className="message-info">
                    <p>{username}</p>
                    <p>time</p>
                </div>
                <p className="message-text">{text}</p>
            </li>
        </div>
    )
}
