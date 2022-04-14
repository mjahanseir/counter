import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1
  }
  render() {
    return (
      <div>
        <span> {this.formatCount()}</span>
        <button>Inremeent</button>
      </div>

    )
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}


export default Counter;
