import React from 'react';
import moment from 'moment';
import getColorFromUserId from '../utils/colorByUser.js';
import './Message.css';

export default function Message(props) {
    const { text, userId, username, time } = props.value;

    const formattedTime = moment(time).fromNow();
    const userLetter = username.charAt(0);
    const userColor = getColorFromUserId(userId);

    return(
        <li className="message">
            <div className="message-avatar" style={{backgroundColor: userColor}}>{userLetter}</div>
            <div className="message-content">
                <div className="message-info">
                    <span className="message-user">{username}</span>
                    <span className="message-time">{formattedTime}</span>
                </div>
                <p className="message-text">{text}</p>
            </div>
        </li>
    )
}
