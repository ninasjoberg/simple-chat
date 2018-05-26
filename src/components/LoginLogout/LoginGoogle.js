import React from 'react';
import firebase from '../../utils/firebase.js';


let provider = new firebase.auth.GoogleAuthProvider();

function signInGoogle () {
    // configure Firebase to use google as the auth provider
    firebase.auth().signInWithRedirect(provider);

    // initiate login with google
    firebase.auth()
        // open login google window
        .getRedirectResult()
        .then((result) => {
            return result.user;
        })
        .then((user) => {
            //store the user (email, uid and username) data in Firebase database
            firebase.database()
                .ref(`users/${user.uid}`)
                .set({
                    email: user.email,
                    uid: user.uid,
                    username: user.displayName
                });
        })
        .catch((error) => console.log(error) /* Handle Errors here.*/ );
}


export default function LoginGoogle(){
    return(
        <div>
            <a  href='#' onClick={signInGoogle}>Sign in with google</a>
        </div>
    )
}