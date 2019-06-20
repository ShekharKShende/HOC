import React, { Component } from 'react';
import withCounter from './withCounter'

class ClickCounter extends Component {

    render() {
        const {name, counter, incrementCount} = this.props
        return <button onClick={incrementCount}> {name} Clicked { counter } times</button>
    }
}

export default withCounter(ClickCounter, 5);