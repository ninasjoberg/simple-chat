import React, { Component } from 'react';
import firebase from './utils/firebase.js';
import Header from './components/Header.js'
import LoginGoogle from './components/LoginLogout/LoginGoogle.js';
import MessageList from './components/MessageList.js';
import MessageForm from './components/MessageForm.js';
import './global.css';
import './App.css';


class App extends Component {

	state = {
		currentUser: '',
		messagesList: [],
	}

	componentDidMount() {
		firebase.auth().onAuthStateChanged(this.onUserReady);

		//Listens for when new values/objects adds to the database Firebase. callback returns the added object
		firebase.database()
			.ref('messages').on('child_added', (snapshot) => {
				const newMessage = {
					value: snapshot.val(),
					key: snapshot.key
				}
			this.setState({ messagesList: [...this.state.messagesList, newMessage] })
		})
	}

	//function that sets the currentUser state (the one who is logged in)
	onUserReady = (user) => {
		if (user && user.displayName) {
			const newUser = {
				email: user.email,
				username: user.displayName,
				userId: user.uid,
			}
			this.setState({ currentUser: newUser });
		}
		else {
			this.setState({ currentUser: '' });
		}
	}


	render() {
		const { currentUser, messagesList } = this.state;

		return (
			<div className="app">
				<Header username={currentUser.username} />
				{!currentUser &&
					<LoginGoogle />
				}
				{currentUser &&
					<div className="app-content">
						<MessageList messagesList={messagesList} />
						<MessageForm currentUser={currentUser} />
					</div>
				}
			</div>
		);
	}
}

export default App;
