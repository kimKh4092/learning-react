
import React, { Component } from 'react';

class Counter extends Component {

    state = {
        value: this.props.value

    };


    handleIncrement = product => {
        console.log(product);
        this.setState({ value: this.state.value + 1 })
    }


    render() {

        console.log("props", this.props);

        return (
            <div>
                {this.props.children}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.handleIncrement({ id: 1 })} className="btn">Increment</button>
            </div>);
    }

    getBadgeClasses() {
        let classes = "badge m-2";
        classes += (this.state.value === 0) ? " badge-warning" : " badge-primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.state;
        return count === 0 ? 'zero' : count;
    }


}

export default Counter;