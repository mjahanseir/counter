import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    ImageURL: 'https://picsum.photos/200'
  }
  render() {
    return (
      <div>
        <img src={this.state.ImageURL} alt="" />
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
