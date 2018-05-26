import React from 'react';
import Message from './Message.js'


export default function MessageList(props) {

    return(
        <div className="message-list">
            <ul>
                {props.messagesList.map((message) => <Message {...message} />)}
            </ul>
        </div>
    )

}
