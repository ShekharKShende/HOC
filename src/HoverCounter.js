import React, { Component } from 'react';
import withCounter from './withCounter'
class HoverCounter extends Component {

    render() {
        const { counter, incrementCount} = this.props
        return (
            <div>
                <h1 onMouseOver={incrementCount} > Hovered {counter} times </h1>
            </div>
        );
    }
}
// pass parameter to hoc here is we passed 10
export default withCounter(HoverCounter, 10);