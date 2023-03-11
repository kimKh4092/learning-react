//removing local state

import React, { Component } from 'react';

class Counter extends Component {

    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);

    }



    render() {
        console.log('counter')
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)} className="btn">Increment</button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm m-2'>Delete</button>
            </div>);
    }

    getBadgeClasses() {
        let classes = "badge m-2";
        classes += (this.props.counter.value === 0) ? " badge-warning" : " badge-primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'zero' : value;
    }


}

export default Counter;