import React, { Component } from 'react';
import firebase from './utils/firebase.js';
import LoginGoogle from './components/LoginLogout/LoginGoogle.js';
import LogoutGoogle from './components/LoginLogout/LogoutGoogle.js';
import MessageForm from './components/MessageForm/MessageForm.js';
import './App.css';


class App extends Component {

	state = {
		currentUser: '',
	}

	componentDidMount() {
		firebase.auth().onAuthStateChanged(this.onUserReady);
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
		const { currentUser } = this.state;

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
						<MessageForm currentUser={currentUser.username}/>
					</div>
				}
			</div>
		);
	}
}

export default App;
