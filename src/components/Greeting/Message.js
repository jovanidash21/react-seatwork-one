import React, { Component } from 'react';

class Message extends Component {
    render() {
        const { name } = this.props;
        let greetingsText = '';

        if (!name) {
            greetingsText = 'Please enter your name';
        } else {
            greetingsText = `Hello ${name}`;
        }

        return (
            <div>
                {greetingsText}
            </div>
        )
    };
}

export default Message;