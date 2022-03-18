import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
  decrement() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }
  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button
          onClick={() => {
            this.incrementFive();
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.decrement();
          }}
        >
          -
        </button>
      </div>
    );
  }
}

export default Counter;
