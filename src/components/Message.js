import React from 'react';
import './Message.css';

export default function Message(props) {
    const { text, userId, username } = props.value;

    const userLetter = username.charAt(0);

    return(
        <li className="message">
            <div className="message-avatar"><p>{userLetter}</p></div>
            <div className="message-info">
                <p className="message-user">{username}</p>
                <p>time</p>
            </div>
            <p className="message-text">{text}</p>
        </li>
    )
}
