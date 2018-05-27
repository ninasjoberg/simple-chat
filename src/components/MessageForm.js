import React, { Component } from 'react';
import firebase from '../utils/firebase.js';
import './MessageForm.css';


export default class MessageForm extends Component {

    state = {
        message: '',
    }

    onChange = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }

    onSubmit = (event) => {
        //check if enter key is pressed
        if(event.keyCode === 13) {

        //prevent the page to reload when the form is submitted
        event.preventDefault();

        const { username, userId } = this.props.currentUser;
        const { message: text } = this.state;

        const message = {
            text,
            username,
            userId,
        }
        //store the message data in Firebase database
        firebase.database()
            .ref('messages')
            .push(message)
            //sets state to empty strings which clear the inputfield
            .then(this.setState({ message: '' }))
            .catch((error) => console.log(error) /* Handle Errors here.*/ );
        }
    }

    render() {
        return(
            <form className="message-form" onKeyDown={this.onSubmit}>
                <textarea className="message-form-input" type="text" name="message" onChange={this.onChange} value={this.state.message} placeholder="message" ></textarea>
            </form>
        )
    }
}

