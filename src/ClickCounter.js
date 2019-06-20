import React from 'react';
import withCounter from './withCounter'


const ClickCounter = (props) => {
    const {name, counter, incrementCount} = props
    return <button onClick={incrementCount}> {name} Clicked { counter } times</button>
}


export default withCounter(ClickCounter, 5);