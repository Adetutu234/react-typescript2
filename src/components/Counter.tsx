import React, {Component} from "react";

// CODE 2
// defining an empty interface for props 
interface CounterProps {}

// defining an interface for state
interface CounterState {
    count: number;
}

// passing the interface to component
class Counter extends Component<CounterProps,CounterState>{
    // initializing state with correct typing
    state: CounterState ={
        count: 0,
    }
    
    // use arrow function to retain 'this' content
    increment = () => {
        this.setState({ count: this.state.count + 1});
    };
    
    render() {
        return (
            <div>
            <p>Count: {this.state.count}</p>
            <button onClick={this.increment}>Increment</button>
        </div>
    )
}
};

export default Counter