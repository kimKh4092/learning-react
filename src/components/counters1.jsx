//passing data to components
//props

//passing children between opening and closing tag

import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ]
    }
    render() {
        return (<div>
            {this.state.counters.map(counter =>
                <Counter key={counter.id} value={counter.value} >
                    <h4>Counter #{counter.id}</h4>
                </Counter>)}
        </div>);
    }
}

export default Counters;

//state vs props
//state local data in component
//props data tha is given to component
//props is read-only