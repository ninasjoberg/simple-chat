import React, { Component } from 'react';
import firebase from '../../utils/firebase.js';


export default class MessageForm extends Component {

    state = {
        message: '',
    }

    onChange = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }

    onSubmit = (event) => {
        //prevent the page to reload when the form is submitted
        event.preventDefault();

        const message = {
            message: this.state.message,
            user: this.props.currentUser,
        }
        //store the message data in Firebase database
        firebase.database()
            .ref('message')
            .push(message)
            //sets state to empty strings which clear the inputfield
            .then(this.setState({ message: '' }))
            .catch((error) => console.log(error) /* Handle Errors here.*/ );
    }

    render() {
        return(
            <div className="message-form">
                <form onSubmit={this.onSubmit}>
                    <input className="message-form-input" type="text" name="message" onChange={this.onChange} value={this.state.message} placeholder="message"></input>
                </form>
            </div>
        )
    }
}
