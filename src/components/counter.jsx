import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
  }
  style = {
    fontSize: 40,
    fontweight: "bold"
  }
  render() {
    return (
      <div>
        <span style={this.style} className="badge badge-primary m-2"> {this.formatCount()}</span>
        <button className="btn btn-secondary mtn-sm">Inremeent</button>
      </div>

    )
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}


export default Counter;
