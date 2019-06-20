import React from 'react';
// we can pass parameter to hoc
const withCounter = (WrappedComponent, incrementNumber) => {

    class WithCounter extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                counter:0   
            }
        }
        
        incerementCounter = () =>{
            this.setState(prevState =>{
                return {
                    counter : prevState.counter + incrementNumber
                }
            })
        }

        render() {
            const {counter} = this.state

            return <WrappedComponent 
            counter={counter} 
            incrementCount = {this.incerementCounter}
            /* we can pass props coming from WrappedComponet */
            {...this.props}
            />
        }  
    }
//return new component
    return WithCounter

}

export default withCounter