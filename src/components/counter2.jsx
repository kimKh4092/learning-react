//rendering classes
import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 1,

    };


    render() {

        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn">Increment</button>
            </div>);
    }

    getBadgeClasses() {
        let classes = "badge m-2";
        classes += (this.state.count === 0) ? " badge-warning" : " badge-primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'zero' : count;
    }


}

export default Counter;