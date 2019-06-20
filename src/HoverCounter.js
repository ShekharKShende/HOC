import React from 'react';
import withCounter from './withCounter'

const HoverCounter = props => {
    const { counter, incrementCount} = props
    return (
        <div>
            <h1 onMouseOver={incrementCount} > Hovered {counter} times </h1>
        </div>
    )
}
// pass parameter to hoc here is we passed 10
export default withCounter(HoverCounter, 10);