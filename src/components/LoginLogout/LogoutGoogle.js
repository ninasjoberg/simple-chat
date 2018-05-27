import React from 'react';
import firebase from '../../utils/firebase.js';
import './LogoutGoogle.css';


function signOutGoogle(){
    firebase
    .auth()
    .signOut()
    .catch(error => console.log(error) /* Handle Errors here.*/);
}

export default function LogoutGoogle(){
    return(
        <button className="logout-button" onClick={signOutGoogle}>Sign out</button>
    )
}
