import React from 'react';
import getColorFromName from '../utils/colorByName.js';
import './Message.css';

export default function Message(props) {
    const { text, userId, username, time } = props.value;

    const userLetter = username.charAt(0);

    let userColor = getColorFromName(username);

        console.log(userColor);

    return(
        <li className="message">
            <div className="message-avatar" style={{backgroundColor: userColor}}>{userLetter}</div>
            <div className="message-content">
                <div className="message-info">
                    <span className="message-user">{username}</span>
                    <span className="message-time">{time}</span>
                </div>
                <p className="message-text">{text}</p>
            </div>
        </li>
    )
}
