import React from 'react';
import firebase from '../../utils/firebase.js';
import './LoginGoogle.css';

let provider = new firebase.auth.GoogleAuthProvider();

function signInGoogle () {
    provider.addScope('profile');
    provider.addScope('email');
    // initiate login with google
    firebase.auth()
        // open login google popup
        .signInWithPopup(provider)
        .then((result) => {
            const token = result.credential.accessToken;
            const user = result.user;
            console.log('logged in', user);
        })
        .catch((error) => console.log(error) /* Handle Errors here.*/ );

}


export default function LoginGoogle(){
    return(
        <button className="login-button" onClick={signInGoogle}>Sign in with google</button>
    )
}