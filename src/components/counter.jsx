import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  }
  handleInc() {
    console.log("click");
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        <button onClick={this.handleInc} className="btn btn-secondary mtn-sm">Inremeent</button>
      </div>

    )
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}


export default Counter;
