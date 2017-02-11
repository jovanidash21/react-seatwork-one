import React, { Component } from 'react';

class GroceryList extends Component {
    render() {
        const {grocery} = this.props;

        return (
            <li>{grocery.item}</li>
        )
    };
}

export default GroceryList;