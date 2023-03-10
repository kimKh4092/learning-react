import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0,
        imageUrl: 'http://picsum.photos/200 '
    };

    styles = {
        fontSize: 50,
        fontWeight: 'bold'

    };

    render() {
        return (
            <React.Fragment>
                <img src={this.state.imageUrl}></img>
                <span style={this.styles} className='badge badge-primary m-2'>{this.formatCount()}</span>
                <button style={{ fontSize: 30 }} className='btn btn-secondary btn-sm'>Increment</button></React.Fragment>);
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'zero' : count;
    }
}

export default Counter;