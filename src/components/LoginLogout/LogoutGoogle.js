import React from 'react';
import firebase from '../../utils/firebase.js';


function signOutGoogle(){
    firebase
    .auth()
    .signOut()
    .catch(error => console.log(error) /* Handle Errors here.*/);
}

export default function LoginGoogle(){
    return(
        <div>
            <a  href='#' onClick={signOutGoogle}>Sign out</a>
        </div>
    )
}