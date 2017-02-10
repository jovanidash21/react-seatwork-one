import React, { Component } from 'react';
import Message from './Message';

class Greeting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({name: event.target.value});
    }
    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3" style={{textAlign:"center"}}>
                        <h1>
                            <Message name={this.state.name}/>
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <input className="form-control" type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange} required />
                    </div>
                </div>
            </div>
        )
    };
}

export default Greeting;