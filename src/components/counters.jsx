import React, { Component } from 'react';
import Counter from './counter-2'

class Counters extends Component {

    render() {
        console.log('counters')
        const { onDelete, onIncrement, onReset, Counters } = this.props;
        return (<div>
            <button className='btn btn-primary btn-sm m-2'
                onClick={onReset}>Reset</button>
            {this.props.counters.map(counter =>
                <Counter key={counter.id}

                    onIncrement={onIncrement}
                    onDelete={onDelete}
                    counter={counter}>
                    <h4>Counter #{counter.id}</h4>
                </Counter>)}
        </div>);
    }
}

export default Counters;