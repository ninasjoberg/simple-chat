import React from 'react';
import LogoutGoogle from './LoginLogout/LogoutGoogle.js';
import './Header.css';

export default function Header(props) {
    const { username } = props;

    return(
        <div className="header">
            {username &&
                <div className="header-info">
                    <p className="header-user">{username}</p>
                    <LogoutGoogle />
                </div>
            }
            <h1 className="header-title">the simple-chat app</h1>
        </div>
    )
}
