import React, { Component } from 'react';
import firebase from './utils/firebase.js';
import LoginGoogle from './components/LoginLogout/LoginGoogle.js';
import LogoutGoogle from './components/LoginLogout/LogoutGoogle.js';
import MessageList from './components/MessageList.js';
import MessageForm from './components/MessageForm.js';
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
				userId: user.uid
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
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">the simple-chatt app</h1>
				</header>
				{!currentUser &&
					<LoginGoogle />
				}
				{currentUser &&
					<div>
						<h3>Welcome {currentUser.username}</h3>
						<LogoutGoogle />
						<MessageList messagesList={messagesList} />
						<MessageForm currentUser={currentUser}/>
					</div>
				}
			</div>
		);
	}
}

export default App;
