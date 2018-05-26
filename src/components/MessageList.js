import React from 'react';
import Message from './Message.js';
import './MessageList.css';


export default function MessageList(props) {

    return(
        <ul className="message-list">
            {props.messagesList.map((message) => <Message {...message} />).reverse()}
        </ul>
    )
}
