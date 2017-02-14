import React, { Component } from 'react';
import GroceryList from './GroceryList';

var groceries = [
    {item: 'Apple'},
    {item: 'Pineapple'}
];

class Grocery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            groceries: groceries
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleClearItems = this.handleClearItems.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleAddItem(event) {
        event.preventDefault();
        let item = this.state.value;
        if (item.length != 0) {
            this.state.groceries.push({item:item});
            this.setState({
                value: '',
                groceries: this.state.groceries
            });
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3" style={{textAlign:"center"}}>
                        <h1>
                            Grocery List
                        </h1>
                        <form onSubmit={this.handleAddItem}>
                            <div className="input-group">
                                <input className="form-control" type="text" placeholder="Item" value={this.state.value} onChange={this.handleChange} required />
                                <span className="input-group-btn">
                                    <button className="btn btn-primary" type="submit" value="Submit">
                                        Enter
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <ul style={{margin:"10px"}}>
                            {
                                groceries.map((grocery) => {
                                    return <GroceryList grocery={grocery} />
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    };
}

export default Grocery;