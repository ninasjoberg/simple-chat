import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Initialize Firebase
var config = {
	apiKey: "AIzaSyBbwxIHMuLDCrqaTfrcGUGmMASYtjgdPw4",
	authDomain: "simple-chat-3460f.firebaseapp.com",
	databaseURL: "https://simple-chat-3460f.firebaseio.com",
	projectId: "simple-chat-3460f",
	storageBucket: "simple-chat-3460f.appspot.com",
	messagingSenderId: "666229101388"
};
firebase.initializeApp(config);

export default firebase;




