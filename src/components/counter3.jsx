//rendering lists
import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 1,
        tags: ['tag1', 'tag2', 'tag3']

    };


    render() {

        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn">Increment</button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}

                </ul>
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